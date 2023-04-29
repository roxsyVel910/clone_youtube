import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [ videos, setVideos] = useState([])

  const {id} = useParams();
  useEffect(() => {
    fetchFromAPI(`channel? part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.item[0]));

  }, [id])

  return (
    <div>
      {id}
    </div>
  )
}

export default ChannelDetail
