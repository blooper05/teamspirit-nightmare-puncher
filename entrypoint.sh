#!/bin/sh

set -eux

Xvfb -ac -screen scrn 1280x2000x24 :99.0 &
export DISPLAY=:99.0

exec "$@"
