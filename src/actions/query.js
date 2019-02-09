const buildQuery = (params) => {

  const { price, sport, type, color, size } = params;

  let query = {
    featured: true
  };


  if(typeof price !== "undefined") {
    switch (price) {
      case "cheap":
        query = Object.assign({}, query, {
          featured: false,
          price: {
            $lte: 50
          }
        });
      break;

      case "regular":
        query = Object.assign({}, query, {
          featured: false,
          price: {
            $lte: 150,
            $gte: 51
          }
        });
      break;

      case "expensive":
        query = Object.assign({}, query, {
          featured: false,
          price: {
            $gte: 151
          }
        });
      break;
    }
  }

  if(typeof sport !== "undefined") {
    switch (sport) {
      case "lifestyle":
      query = Object.assign({}, query, {
        featured: false,
        category: "lifestyle"
      });
      break;

      case "running":
      query = Object.assign({}, query, {
        featured: false,
        category: "running"
      });
      break;

      case "basketball":
      query = Object.assign({}, query, {
        featured: false,
        category: "basketball"
      });
      break;

      case "soccer":
      query = Object.assign({}, query, {
        featured: false,
        category: "soccer"
      });
      break;

      case "training":
      query = Object.assign({}, query, {
        featured: false,
        category: "training"
      });
      break;
    }
  }

  if(typeof type !== "undefined") {
    switch (type) {
      case "click":
      query = Object.assign({}, query, {
        featured: false,
        closureType: "click"
      });
      break;

      case "slipon":
      query = Object.assign({}, query, {
        featured: false,
        closureType: "slipon"
      });
      break;

      case "strap":
      query = Object.assign({}, query, {
        featured: false,
        closureType: "strap"
      });
      break;
    }
  }

  if(typeof color !== "undefined") {
    switch (color) {
      case "white":
      query = Object.assign({}, query, {
        featured: false,
        color: "white"
      });
      break;

      case "silver":
      query = Object.assign({}, query, {
        featured: false,
        color: "silver"
      });
      break;

      case "yellow":
      query = Object.assign({}, query, {
        featured: false,
        color: "yellow"
      });
      break;

      case "gold":
      query = Object.assign({}, query, {
        featured: false,
        color: "gold"
      });
      break;

      case "orange":
      query = Object.assign({}, query, {
        featured: false,
        color: "orange"
      });
      break;

      case "green":
      query = Object.assign({}, query, {
        featured: false,
        color: "green"
      });
      break;

      case "blue":
      query = Object.assign({}, query, {
        featured: false,
        color: "blue"
      });
      break;

      case "pink":
      query = Object.assign({}, query, {
        featured: false,
        color: "pink"
      });
      break;

      case "olive":
      query = Object.assign({}, query, {
        featured: false,
        color: "olive"
      });
      break;

      case "red":
      query = Object.assign({}, query, {
        featured: false,
        color: "red"
      });
      break;

      case "purple":
      query = Object.assign({}, query, {
        featured: false,
        color: "purple"
      });
      break;

      case "grey":
      query = Object.assign({}, query, {
        featured: false,
        color: "grey"
      });
      break;
    }
  }

  if(typeof size !== "undefined") {
    switch (size) {
      case "3":
      query = Object.assign({}, query, {
        featured: false,
        size: "3"
      });
      break;

      case "3.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "3.5"
      });
      break;

      case "4":
      query = Object.assign({}, query, {
        featured: false,
        size: "4"
      });
      break;

      case "4.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "4.5"
      });
      break;

      case "5":
      query = Object.assign({}, query, {
        featured: false,
        size: "5"
      });
      break;

      case "5.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "5.5"
      });
      break;

      case "6":
      query = Object.assign({}, query, {
        featured: false,
        size: "6"
      });
      break;

      case "6.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "6.5"
      });
      break;

      case "7":
      query = Object.assign({}, query, {
        featured: false,
        size: "7"
      });
      break;

      case "7.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "7.5"
      });
      break;

      case "8":
      query = Object.assign({}, query, {
        featured: false,
        size: "8"
      });
      break;

      case "8.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "8.5"
      });
      break;

      case "9":
      query = Object.assign({}, query, {
        featured: false,
        size: "9"
      });
      break;

      case "9.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "9.5"
      });
      break;

      case "10":
      query = Object.assign({}, query, {
        featured: false,
        size: "10"
      });
      break;

      case "10.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "10.5"
      });
      break;

      case "11":
      query = Object.assign({}, query, {
        featured: false,
        size: "11"
      });
      break;

      case "11.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "11.5"
      });
      break;

      case "12":
      query = Object.assign({}, query, {
        featured: false,
        size: "12"
      });
      break;

      case "12.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "12.5"
      });
      break;

      case "13":
      query = Object.assign({}, query, {
        featured: false,
        size: "13"
      });
      break;

      case "13.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "13.5"
      });
      break;

      case "14":
      query = Object.assign({}, query, {
        featured: false,
        size: "14"
      });
      break;

      case "14.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "14.5"
      });
      break;

      case "15":
      query = Object.assign({}, query, {
        featured: false,
        size: "15"
      });
      break;

      case "15.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "15.5"
      });
      break;

      case "16":
      query = Object.assign({}, query, {
        featured: false,
        size: "16"
      });
      break;

      case "16.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "16.5"
      });
      break;

      case "17":
      query = Object.assign({}, query, {
        featured: false,
        size: "17"
      });
      break;

      case "17.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "17.5"
      });
      break;

      case "18":
      query = Object.assign({}, query, {
        featured: false,
        size: "18"
      });
      break;

      case "18.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "18.5"
      });
      break;

      case "19":
      query = Object.assign({}, query, {
        featured: false,
        size: "19"
      });
      break;

      case "19.5":
      query = Object.assign({}, query, {
        featured: false,
        size: "19.5"
      });
      break;

      case "20":
      query = Object.assign({}, query, {
        featured: false,
        size: "20"
      });
      break;

      case "21":
      query = Object.assign({}, query, {
        featured: false,
        size: "21"
      });
      break;
    }
  }

  return query;
};

module.exports = buildQuery;
