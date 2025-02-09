function BackgroundImage(weather) {
    if (!weather) {
      return null;
    }
  
    const weatherId = weather?.list[0]?.weather[0]?.id;
    let imageUrl = "";
  
    if (weatherId >= 200 && weatherId < 300) {
      imageUrl = "https://i.gifer.com/Rnim.gif";
    } else if (weatherId >= 300 && weatherId < 400) {
      imageUrl = "https://i.gifer.com/Rhhw.gif";
    } else if (weatherId >= 500 && weatherId < 600) {
      imageUrl = "https://i.gifer.com/7scx.gif";
    } else if (weatherId >= 600 && weatherId < 700) {
      imageUrl = "https://i.gifer.com/Dv9E.gif";
    } else if (weatherId >= 700 && weatherId < 800) {
      imageUrl = "https://i.gifer.com/604.gif";
    } else if (weatherId === 800) {
      imageUrl = "https://i.gifer.com/Lx0q.gif";
    } else if (weatherId > 800) {
      imageUrl = "https://i.gifer.com/n4V.gif";
    }
  
    return `${imageUrl}`;
  }
  export { BackgroundImage };
  