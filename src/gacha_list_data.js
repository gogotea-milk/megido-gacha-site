/**
 * Gatcha List data with utility functions
 */

export default [
  {
    name: "コレチケ7枚",
    rate_settings: {
      base_rate: 1.0,
      exclude: megido => {
        return megido.id === "真23"; //ネフィリム
      }
    }
  },
  {
    name: "コレチケ10枚",
    rate_settings: {
      base_rate: 1.0,
      exclude: megido => {
        return (
          !(
            megido.clock_type === "真" ||
            megido.regenerated ||
            megido.terminus
          ) || megido.id === "真23"
        ); //ネフィリム
      }
    }
  },
  {
    name: "コレチケ15枚",
    rate_settings: {
      base_rate: 1.0,
      exclude: megido => {
        return !(megido.regenerated || megido.terminus) || megido.id === "真23"; //ネフィリム
      }
    }
  },
  {
    name: "ネフィリムサバト",
    rate_settings: {
      base_rate: 0.1,
      pickup: {
        真23: 0.007,
        真25: 0.0035,
        真57: 0.0035,
        真68: 0.0035,
        真19: 0.01
      }
    }
  },
  {
    name: "新春万歳",
    rate_settings: {    
      exclude: megido=> {
        return megido.terminus;
      },  
      pickup: {
        祖41R: 0.006,
        祖7R: 0.006,
        祖38: 0.006,
        祖24: 0.006
      }
    }
  }
];
