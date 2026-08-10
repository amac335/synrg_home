FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Switch to the non-root user and install Bun natively
USER vscode
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to the PATH for all shell sessions
ENV PATH="/home/vscode/.bun/bin:$PATH"
