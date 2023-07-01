#!/bin/sh

# Install dependencies
apk add --no-cache build-base autoconf curl-dev openssl-dev zlib-dev libcurl expat-dev perl-dev pcre2-dev gettext-dev

# Set the package URL and filename
package_url="https://github.com/git/git/archive/refs/tags/v2.34.1.tar.gz"
package_file="git.tar.gz"

# Create the package and bin directories if they don't exist
mkdir -p package
mkdir -p bin

# Download the package file to the package directory
curl -L $package_url -o package/$package_file

# Extract the contents of the package file to the package directory
tar -C package -xzf package/$package_file

# Change to the git source directory
cd package/git-2.34.1

# Configure the build
make configure
./configure --prefix=$(pwd)/../../bin

# Build and install git with NO_REGEX=NeedsStartEnd option
make NO_REGEX=NeedsStartEnd
make install
