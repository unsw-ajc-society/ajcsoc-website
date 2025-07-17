# ajcsoc-website

## Development

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/unsw-ajc-society/ajcsoc-website.git
    cd ajcsoc-website
    ```

2. Install mise

    > [\!IMPORTANT]
    > Follow the [instructions](https://mise.jdx.dev/getting-started.html). Make sure you activate mise in your shell.

3. Install dependencies:

    ```bash
    # Trust mise config
    mise trust
    # Install Node.js, Bun, and dependencies in package.json
    mise install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

> [\!IMPORTANT]
> This is also required to generate TypeScript types for the project, so make sure to run it before you start developing. Otherwise, you will see TypeScript errors in your editor.

To start the preview server, which is useful for testing the production build locally, run:

```bash
npm run preview
```

### Environment Variables

> [\!NOTE]
> You will need to set up the following environment variables to test the newsletter subscription feature.

- `GOOGLE_SERVICE_ACCOUNT_KEY`: Google service account private key JSON file.
- `NEWSLETTER_SUBSCRIPTION_SHEET_ID`: ID of the Google Sheet to save newsletter subscriptions.
- `NEWSLETTER_SUBSCRIPTION_SHEET_RANGE`: Range of the Google Sheet to save newsletter subscriptions.

You can find more information in [`.dev.vars.example`](.dev.vars.example).
You should create a copy of `.dev.vars.example` and rename it to `.env` in the root directory of the project. Then, fill in the required environment variables.

`GOOGLE_SERVICE_ACCOUNT_KEY` should contain the entire JSON content of your Google service account private key file you generated from the Google Cloud Console.
Read [Next.js documentation](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) to learn how to write multi-line environment variables.

#### Cloudflare Workers Secret Management

We manage our secrets from Cloudflare Workers Dashboard.
Do not commit `.env` or `.dev.vars` files to the repository, or the secrets will be exposed to the public.
Also, do not write variables in `wrangler.jsonc`, as they will override the environment variables set from the Cloudflare Workers Dashboard.

Since `wrangler versions upload` does not support `--keep-vars` ([issue](https://github.com/cloudflare/workers-sdk/issues/7654)), we need to make all of the environment variables secrets instead of variables even if they are not sensitive.

### Linting and Formatting

To lint and format the code, run:

```bash
npm run check
```
