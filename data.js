var APP_DATA = {
  "scenes": [
    {
      "id": "0-spavaca-soba",
      "name": "spavaća soba",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.7178533118877342,
        "pitch": 0.0007960751182309878,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.4297666806668836,
          "pitch": 0.11862129993672532,
          "rotation": 0,
          "target": "1-soba"
        },
        {
          "yaw": -3.024725116200898,
          "pitch": -0.04249668256852246,
          "rotation": 0,
          "target": "2-kuhinja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-soba",
      "name": "soba",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.6122360750091929,
        "pitch": 0.11499167234583219,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.387013105192203,
          "pitch": 0.07025794048050926,
          "rotation": 0,
          "target": "0-spavaca-soba"
        },
        {
          "yaw": 1.1949219373104185,
          "pitch": 0.057428933693827844,
          "rotation": 0,
          "target": "2-kuhinja"
        },
        {
          "yaw": -0.09362053218301902,
          "pitch": 0.056147676910748956,
          "rotation": 0,
          "target": "3-kupatilo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kuhinja",
      "name": "kuhinja",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.661343758116967,
        "pitch": 0.20443927121545258,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 1.9786204541848758,
          "pitch": 0.22009943490794015,
          "rotation": 0,
          "target": "1-soba"
        },
        {
          "yaw": 0.690947396200249,
          "pitch": 0.016789871718875915,
          "rotation": 0,
          "target": "0-spavaca-soba"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kupatilo",
      "name": "kupatilo",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.697049265451982,
        "pitch": 0.2826805336280369,
        "fov": 1.4390866472079973
      },
      "linkHotspots": [
        {
          "yaw": 2.3729249216945467,
          "pitch": 0.2571947432097943,
          "rotation": 0,
          "target": "1-soba"
        }
      ],
      "infoHotspots": []
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
