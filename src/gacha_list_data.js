/**
 * Gatcha List data with utility functions
 */

export default [
  /*
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
  },
  {
    name: "ナンパ術",
    rate_settings: {
      megido_back_of: "2020-01-21",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真9R: 0.006,
        真22R: 0.006
      }
    }
  },
  {
    name: "文豪紡ぐサスペンス",
    rate_settings: {
      megido_back_of: "2020-01-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖30: 0.006,
        祖63: 0.006,
        真31: 0.006
      }
    }
  },
  */
  {
    name: "キュートな野郎サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-01-31",
      pickup: {
        真23: 0.0035,
        真70: 0.0035,
        真59: 0.012
      }
    }
  },
  /*
  {
    name: "ビタースイート",
    rate_settings: {
      megido_back_of: "2020-02-05",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖61: 0.006,
        真2: 0.006
      }
    }
  },
  {
    name: "恐注射",
    rate_settings: {
      megido_back_of: "2020-02-10",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖18R: 0.012,
        祖36: 0.006
      }
    }
  },
  */
  {
    name: "サキュバスB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-02-15",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        真3R: 0.02
      }
    }
  },
  {
    name: "ティアマト魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-02-16",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        真17: 0.02
      }
    }
  },
  {
    name: "アイムR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-02-17",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖23R: 0.02
      }
    }
  },
  {
    name: "ボティス魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-02-18",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖17: 0.02
      }
    }
  },
  {
    name: "ベバル魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-02-19",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        真53: 0.02
      }
    }
  }
];
