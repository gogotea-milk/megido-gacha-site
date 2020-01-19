/**
 * Gatcha List data with utility functions
 */

export default [
  {
    name: "コレチケ7枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2019-12-31"
    }
  },
  {
    name: "コレチケ10枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2019-12-31",
      exclude: megido => {
        return !(
          megido.clock_type === "真" ||
          megido.regenerated ||
          megido.terminus
        );
      }
    }
  },
  {
    name: "コレチケ15枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2019-12-31",
      exclude: megido => {
        return !(megido.regenerated || megido.terminus);
      }
    }
  },
  {
    name: "ネフィリムサバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-01-01",
      pickup: {
        真23: 0.007,
        真25: 0.0035,
        真57: 0.0035,
        真68: 0.0035,
        真19: 0.01
      }
    }
  },
  /*
  {
    name: "新春万歳",
    rate_settings: {
      megido_back_of: "2020-01-06",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖41R: 0.006,
        祖7R: 0.006,
        祖38: 0.006,
        祖24: 0.006
      }
    }
  },
  */
  {
    name: "怒髪衝天の渡し守",
    rate_settings: {
      megido_back_of: "2020-01-14",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖19R: 0.012,
        真17: 0.006
      }
    }
  },
  
  {
    name: "支援上手な三人娘",
    rate_settings: {
      megido_back_of: "2020-01-19",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖67: 0.006,
        祖45: 0.006,
        祖72: 0.006
      }
    }
  }
];
