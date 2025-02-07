var APP_DATA = {
  "scenes": [
    {
      "id": "0-skatepark",
      "name": "Skatepark",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6235729946564597,
          "pitch": 0.12092571138998665,
          "rotation": 0,
          "target": "1-city"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6381380110864985,
          "pitch": -0.05896270222430111,
          "title": "Gymnase Jean Prevost",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-city",
      "name": "City",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.319823061471645,
          "pitch": -0.10618616370006784,
          "rotation": 0,
          "target": "0-skatepark"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5796238707642427,
          "pitch": -0.12899659937107621,
          "title": "Lycée Jean Prevost",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
