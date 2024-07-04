import { defineConfig } from "vite";
// import Dotenv from "dotenv-webpack";
import react from "@vitejs/plugin-react";
// import reactRefresh from "@vitejs/plugin-react-refresh";
import EnvironmentPlugin from "vite-plugin-environment";
// import pluginRewriteAll from "vite-plugin-rewrite-all";
// const rewriteSlashToIndexHtml = () => {
//   return {
//     name: "rewrite-slash-to-index-html",
//     configureServer(server) {
//       // rewrite / as index.html
//       server.middlewares.use("/", (req, _, next) => {
//         if (req.url === "/") {
//           req.url = "index.html";
//         }
//         next();
//       });
//     },
//   };
// };

export default ({ mode }) => {
  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT
  return defineConfig({
    base: "/",

    plugins: [
      react(),
      EnvironmentPlugin({
        // Uses 'development' if the NODE_ENV environment variable is not defined.
        NODE_ENV: "production",

        // Have in mind that variables coming from process.env are always strings.
        DEBUG: "false",

        // Required: will fail if the API_KEY environment variable is not provided.
        API_KEY: "AIzaSyBFp8nc0MNVLwcVB0JIuWwo3MnndALE1Eo",

        // Optional: will not fail if the APP_VERSION environment variable is missing.
      }),
    ],
    mode: "production",
    build: {chunkSizeWarningLimit: 1600}
    // plugins: [react()],
  });
};
