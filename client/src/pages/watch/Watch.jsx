import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined />
            Home
        </div>
        <video src="https://imdb-video.media-imdb.com/vi517604121/1434659607842-pgv4ql-1616202746840.mp4?Expires=1679042367&Signature=K9XYpZ311kNIGjP1P5DFkGz~ZsU49C4GFClJLiaflcnnzlaevGPnc7M7pKMqwDKhDti7~ZGOHJDICWlLIWEnpz1vBMpLPUXxhlnOjHv3MOnP8ti2RJH-TgMoG5TOxTCFONzL7kXMnjHvAIi~D-o4oMOVyiudWvkooyonqeXbK0gPttWeS~~QgAuWOB6~NWZEcRT1VcuudO9Jdpy8n90Um8lED8a5LAKK3e3WnQwbcowT8I7rcN6PnOcWk-wKbM9nl3L6wgB5tByb6P5o~IjBP9X5D-pzntNoGqa0nPyHDdj9hEBP5ZJAn4EdT~zWxUI1lchw0hizdhtX9u7Lbqhurg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" className="video" autoplay progress controls></video>
    </div>
  )
}
