/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const coreConfig = {
    images: {
        remotePatterns: [
            {hostname: "utfs.io"}
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

import {withSentryConfig} from "@sentry/nextjs";

const config = withSentryConfig(coreConfig, {
        silent: true,
        org: "mbrzezinsky",
        project: "theo-2024",
    },
    {
        tunnelRoute: "/monitoring",
        widenClientFileUpload: true,
        transpileClientSDK: true,
        hideSourceMaps: true,
        disableLogger: true,
        automaticVercelMonitors: true,
    });

export default config;
