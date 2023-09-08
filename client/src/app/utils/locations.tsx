const getLocation = () => {
  const promise = new Promise((res, rej) => {
    navigator.geolocation?.getCurrentPosition(res, rej);
  });

  return promise.then((pos: any) => {
    console.log(pos.coords.latitude, pos.coords.longitude);

    return {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
    } as { lat: number; lng: number };
  });
};

export default getLocation;
