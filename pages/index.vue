<template>
  <div class="flex flex-col justify-between w-screen h-screen">
    <div class="flex flex-row w-full h-full">
      <SideNav />
      <Main />
    </div>
    <Player />
  </div>
</template>

<script>
import spotifyApi, { GET_TOKEN_URL } from "../lib/spotify";
import axios from "axios";

export default {
  name: "IndexPage",

  mounted: async function () {
    const codeFromServer = new URLSearchParams(window.location.search).get(
      "code"
    );

    if (codeFromServer) {
      // Get the access token
      const res = await fetch(GET_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET),
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code: codeFromServer,
          redirect_uri: process.env.REDIRECT_URI,
        }),
      });
      const { access_token, refresh_token } = await res.json();
      this.$store.commit("localStorage/updateAccessToken", access_token);
      this.$store.commit("localStorage/updateRefreshToken", refresh_token);

      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      const me = await spotifyApi.getMe();
      this.$store.commit("localStorage/updateUser", me.body.display_name);

      window.location.href = "/";
    }
  },
};
</script>
