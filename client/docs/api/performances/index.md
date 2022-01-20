## json
舞台情報一覧を取得するapi

## request
`/api/performances`

## response

```json
{
  "performances": [
    {
      "id": 1,
      "title": "performance title",
      "description": "performance description",
      "image_url": "https://example.com/image.png",
      "start_at": "2019-01-01T00:00:00+09:00",
      "dancers": [
        {
          "id": 1,
          "name": "dancer name",
          "description": "dancer description",
          "image_url": "https://example.com/dancer.png",
        },
        ...
      ],
      "created_at": "2019-01-01T00:00:00+09:00",
      "updated_at": "2019-01-01T00:00:00+09:00",
    },
    {
      "id": 2,
      "title": "performance title",
      "description": "performance description",
      "image_url": "https://example.com/image.png",
      "start_at": "2019-01-01T00:00:00+09:00",
      "dancers": [
        {
          "id": 1,
          "name": "dancer name",
          "description": "dancer description",
          "image_url": "https://example.com/dancer.png",
        },
        ...
      ],
      "created_at": "2019-01-01T00:00:00+09:00",
      "updated_at": "2019-01-01T00:00:00+09:00",
    },
  ...
  ]
}
```
