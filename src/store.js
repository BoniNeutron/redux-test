import { createStore } from "redux";

const initialState = {
  players: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto: "https://st1.uvnimg.com/dims4/default/674ea40/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F41%2Fda%2Fe6c16c164bdc8aadc0cf80446147%2Fgettyimages-1071842504.jpg",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto: "https://st1.uvnimg.com/dims4/default/f13e3de/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F57%2F80%2F2eef0f3f46959ca44be6e66ddd26%2Fgettyimages-1074449036.jpg",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto: "https://st1.uvnimg.com/dims4/default/e0b6310/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F54%2F9b%2F951e73ca4441a2ddd3d4184fe6ac%2Fgettyimages-1038034258.jpg",
    },
    {
      id: 4,
      nombre: "Juan Disain",
      foto: "https://st1.uvnimg.com/dims4/default/131f89d/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fa9%2F04%2F1b6356744c9f8e42ba4413f315a2%2Fgettyimages-1067270412-1.jpg",
    },
    {
      id: 5,
      nombre: "Alvaro Felipe",
      foto: "https://st1.uvnimg.com/dims4/default/c48e52b/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fc6%2Fe7%2Fcc767b2043b1b1107ee8635dcbf2%2Fgettyimages-1066108214.jpg",
    },
    {
      id: 6,
      nombre: "Alexys Lozada",
      foto: "https://st1.uvnimg.com/dims4/default/077f7c4/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F55%2F3e%2Fbd63636449b4aed9bef0a811b780%2Fgettyimages-981362976.jpg",
    },
    {
      id: 7,
      nombre: "Harold Pajuelo",
      foto: "https://st1.uvnimg.com/dims4/default/2a5fec2/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Ffa%2Ff3%2F420ce9104fa2b0eb00a6086e2b3d%2Fgettyimages-976124306.jpg",
    },
    {
      id: 8,
      nombre: "Manu Rodriguez",
      foto: "https://st1.uvnimg.com/dims4/default/bc6244d/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fff%2Fc8%2F5455a636490e9b587b58f923dcbb%2Fgettyimages-997244052.jpg",
    },
    {
      id: 9,
      nombre: "AlejoRodríguez",
      foto: "https://st1.uvnimg.com/dims4/default/80b5ef4/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F76%2F1c%2F126373e1425eb87ae433408fb0f6%2Fgettyimages-1059510526.jpg",
    },
    {
      id: 10,
      nombre: "Andrés Muquinche",
      foto: "https://st1.uvnimg.com/dims4/default/1b0a615/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fbc%2F53%2Fe84e683740d186f8203eaf6be6d1%2F2018-09-02t185558z-1083369028-rc1908f98ef0-rtrmadp-3-soccer-italy-sam-nap.JPG",
    },
    {
      id: 11,
      nombre: "Ricardo Otero",
      foto: "https://st1.uvnimg.com/dims4/default/673af93/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fdf%2F18%2Fc7473d9049ebb56ee8c11b8109a9%2F2018-10-25t173606z-1326044923-rc14bd344900-rtrmadp-3-soccer-europa-rbs-rbk.JPG",
    },
    {
      id: 12,
      nombre: "Deivis Rivera",
      foto: "https://st1.uvnimg.com/dims4/default/5fe3106/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F12%2F8b%2F19d5b33f4ee194df498f7abc07b6%2F2018-12-22t141240z-1838098509-rc1286ce0740-rtrmadp-3-soccer-italy-nap-spa.JPG",
    },
    {
      id: 13,
      nombre: "Percy Tuncar",
      foto: "https://st1.uvnimg.com/dims4/default/f5b2c82/2147483647/resize/420x620%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2F0a%2F2d%2F7967f3fc4fa59d531bf0ee154a0e%2F2018-10-20t154717z-1657509636-rc185a216ad0-rtrmadp-3-soccer-france-psg-ami.JPG",
    },
  ],
  holders: [],
  substitutes: [],
};

const reducerTrainer = (state = initialState, action) => {
  if (action.type === "ADD_HOLDER") {
    return {
      ...state,
      holders: state.holders.concat(action.player),
      players: state.players.filter((i) => i.id !== action.player.id),
    };
  }
  if (action.type === "ADD_SUBSTITUTE") {
    return {
      ...state,
      substitutes: state.substitutes.concat(action.player),
      players: state.players.filter((i) => i.id !== action.player.id),
    };
  }
  if (action.type === "REMOVE_HOLDER") {
    return {
      ...state,
      holders: state.holders.filter((i) => i.id !== action.player.id),
      players: state.players.concat(action.player),
    };
  }
  if (action.type === "REMOVE_SUBSTITUTE") {
    return {
      ...state,
      substitutes: state.substitutes.filter((i) => i.id !== action.player.id),
      players: state.players.concat(action.player),
    };
  }
  return state;
};

export default createStore(reducerTrainer);
