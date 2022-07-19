import UseGetGifs from "../components/hooks/UseGetGifs";

const LionGifs = () => {
  const apiKey = "AfTCcGmNLVN1QzV4hjGU6Tigr5vSe187";
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=lion&limit=25&offset=0&rating=g&lang=en`;
  return UseGetGifs({ url: apiUrl});
};

export default LionGifs;
