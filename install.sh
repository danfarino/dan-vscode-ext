#!/bin/bash
set -e

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"
cd "$script_dir"

pnpm compile
pnpm exec vsce package --allow-missing-repository --skip-license
code --install-extension dan-vscode-extension-0.0.1.vsix --force
