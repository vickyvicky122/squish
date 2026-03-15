#!/usr/bin/env bash
# Deploy squish.space to Unraid via Komodo stack
# Usage: ./deploy.sh
set -euo pipefail

UNRAID_HOST="root@100.85.82.61"
DIST_DIR="/mnt/user/appdata/squish-space/dist"
KOMODO_STACK_DIR="/mnt/user/appdata/komodo/stacks/squish-space"

echo "=== Building production bundle ==="
./gradlew jsBrowserProductionWebpack "-Dorg.gradle.java.home=${JAVA_HOME:-/usr/lib/jvm/java-17-temurin-jdk}"

echo "=== Deploying to Unraid ==="
ssh "$UNRAID_HOST" "mkdir -p $DIST_DIR && chown -R 99:100 /mnt/user/appdata/squish-space"
rsync -avz --delete build/dist/js/productionExecutable/ "$UNRAID_HOST:$DIST_DIR/"
ssh "$UNRAID_HOST" "chown -R 99:100 $DIST_DIR"

echo "=== Restarting Komodo stack ==="
ssh "$UNRAID_HOST" "cd $KOMODO_STACK_DIR && docker compose up -d --force-recreate 2>/dev/null || echo 'Stack not found at Komodo path — deploy via Komodo UI instead'"

echo "=== Done! Live at https://squish.keanuc.net ==="
