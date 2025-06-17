# ajcsoc-website

## Development

### Installation

1. Clone the repository:

```bash
git clone https://github.com/unsw-ajc-society/ajcsoc-website.git
cd ajcsoc-website
```

1. Install mise

Follow the [instructions](https://mise.jdx.dev/getting-started.html).
Make sure you activate mise in your shell.

1. Install dependencies:

```bash
# Trust mise config
mist trust
# Install Node.js, Bun, and dependencies
mise install
```

### Running the Development Server

To start the development server, run:

```bash
bun run dev
```

This is also required to generate TypeScript types for the project, so make sure to run it before you start developing.
Otherwise, you will see TypeScript errors in your editor.

### Linting and Formatting

To lint and format the code, run:

```bash
bun run check
```
