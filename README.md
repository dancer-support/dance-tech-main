# dance-tech-main

## Local setup

フロントは.envをclient配下に設置。
仮にローカルでビルドした場合は `client/.nuxt/.gitkeep` が削除されてしまうのでそのままコミットしないよう気をつけること。
docker-composeを使っている場合はビルドされない（`nuxt dev`）。

```bash
# build container
$ docker-compose build

# run a server
$ docker-compose up
```
