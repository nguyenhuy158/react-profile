# format DDMMYYYY
TIMESTAMP=$(date +%d%m%Y)
echo "TIMESTAMP: $TIMESTAMP"

docker build --platform linux/amd64 \
    -t registry.gitlab.com/huy.ntq02/farmnet/profile:latest-amd64v8 \
    -t registry.gitlab.com/huy.ntq02/farmnet/profile:$TIMESTAMP-amd64v8 .

docker build --platform linux/arm64 \
    -t registry.gitlab.com/huy.ntq02/farmnet/profile:latest-arm64v8 \
    -t registry.gitlab.com/huy.ntq02/farmnet/profile:$TIMESTAMP-arm64v8 .

docker push registry.gitlab.com/huy.ntq02/farmnet/profile:latest-amd64v8
docker push registry.gitlab.com/huy.ntq02/farmnet/profile:latest-arm64v8
docker push registry.gitlab.com/huy.ntq02/farmnet/profile:$TIMESTAMP-amd64v8
docker push registry.gitlab.com/huy.ntq02/farmnet/profile:$TIMESTAMP-arm64v8