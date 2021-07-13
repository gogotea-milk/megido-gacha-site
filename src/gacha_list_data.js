/**
 * Gatcha List data with utility functions
 */

const GachaListData =  [
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
    n  megido_back_of: "2020-02-18",
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
  },
  {
    name: "鎮魂歌",
    rate_settings: {
      megido_back_of: "2020-02-20",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖8R: 0.006,
        祖49R: 0.006
      }
    }
  }  
  {
    name: "寝坊しただと？",
    rate_settings: {
      megido_back_of: "2020-02-25",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖52: 0.006,
        祖25: 0.006,
        祖34: 0.006
      }
    }
  },  
  {
    name: "男装剣士サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-02-29",
      pickup: {
        真25: 0.0035,
        真69: 0.0035,
        真51R: 0.012
      }
    }
  },
  {
    name: "カスピエルC魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-05",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        真22R: 0.02
      }
    }
  },
  {
    name: "フォカロルR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-06",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖41R: 0.02
      }
    }
  },
  {
    name: "フォラス魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-07",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖31: 0.02
      }
    }
  },
  {
    name: "アバラム魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-08",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        真54: 0.02
      }
    }
  },
  {
    name: "ラウムC魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-09",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖40R: 0.02
      }
    }
  },
  {
    name: "アモンR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-03-10",
      exclude: megido => {
        return (
          megido.terminus
        );
      },
      pickup: {
        祖7R: 0.02
      }
    }
  },  
  {
    name: "「仲間」の定義",
    rate_settings: {
      megido_back_of: "2020-03-11",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真15R: 0.012,
        祖44R: 0.006
      }
    }
  },
  {
    name: "点穴極める悪魔",
    rate_settings: {
      megido_back_of: "2020-03-16",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真13: 0.006,
        真14: 0.006,
        真15: 0.006,
        祖36R: 0.006        
      }
    }
  },  
  {
    name: "ぞいお茶会",
    rate_settings: {
      megido_back_of: "2020-03-21",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖71: 0.006,        
        祖54: 0.006,        
        真11: 0.006
      }
    }
  },  
  {
    name: "武術大会",
    rate_settings: {
      megido_back_of: "2020-03-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖6: 0.006,        
        祖22: 0.006,        
        祖36: 0.006,
        祖15: 0.006
      }
    }
  },
  {
    name: "共闘ビルドアップ",
    rate_settings: {      
      megido_back_of: "2020-06-19",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {        
        真27: 0.006,
        祖18R: 0.006,
        祖36R: 0.006
      }
    }
  },
  {
    name: "ガールズトーク",
    rate_settings: {
      megido_back_of: "2020-06-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖45: 0.006,
        祖67: 0.006,
        祖5: 0.006,
        真3R: 0.006
      }
    }
  },  
  {
    name: "定期検診サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-06-29",
      pickup: {
        真4: 0.0035,
        真57: 0.0035,
        真70: 0.0035,
        真71: 0.0035
      }
    }
  },
  {
    name: "鉄の掟サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-07-05",
      pickup: {
        真28: 0.012,
      }
    }
  },
  {
    name: "アマゼロト魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-07-10",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真63: 0.02
      }
    }
  },
  {
    name: "バティンB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-07-11",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖18R: 0.02
      }
    }
  },
  {
    name: "シャックスB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-07-12",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖44R: 0.02
      }
    }
  },
  {
    name: "フェニックスC魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-07-13",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖37R: 0.02
      }
    }
  },
  {
    name: "フォカロルR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-07-14",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖41R: 0.02
      }
    }
  },
  {
    name: "コレチケ5枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-06-27"
    }
  },
  {
    name: "コレチケ10枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-06-27",
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
      megido_back_of: "2020-06-27",
      exclude: megido => {
        return !(megido.regenerated || megido.terminus);
      }
    }
  },
  {
    name: "死に意味を与える者",
    rate_settings: {
      megido_back_of: "2020-7-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖46R: 0.012,
        祖39: 0.006
      }
    }
  },
  {
    name: "戦場ラプソディ",
    rate_settings: {
      megido_back_of: "2020-7-21",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真53: 0.006,
        真54: 0.006,
        祖8R: 0.006,
        祖49R: 0.006
      }
    }
  },
  {
    name: "女番長密着取材",
    rate_settings: {
      megido_back_of: "2020-7-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖15R: 0.006,
        真31: 0.006,
      }
    }
  },
  {
    name: "儂っ娘サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-07-31",
      pickup: {
        祖71R: 0.012,
        真68: 0.0035,
        真4R: 0.0035, 
      }
    }
  },
  {
    name: "憩いのシーサイド",
    rate_settings: {
      megido_back_of: "2020-08-05",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖10: 0.006,
        祖46: 0.006,
        真15: 0.006,
        祖46R: 0.006,
        真15R: 0.006,        
      }
    }
  },
  {
    name: "怪しい仮面の隠遁者",
    rate_settings: {
      megido_back_of: "2020-08-10",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖55R: 0.012,
        祖14: 0.006,
      }
    }
  },
  {
    name: "カッコカワイイ",
    rate_settings: {
      megido_back_of: "2020-08-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真53: 0.006,
        真54: 0.006,
      }
    }
  },
  {
    name: "イカしたメンツ",
    rate_settings: {
      megido_back_of: "2020-08-20",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖43: 0.006,
        祖62: 0.006,
        祖36: 0.006,
        祖4: 0.006
      }
    }
  },
  {
    name: "サンシャイン",
    rate_settings: {
      megido_back_of: "2020-08-25",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖67: 0.006,
        祖22: 0.006,
        真3: 0.006,
        真3R: 0.006,
        真22R: 0.006
      }
    }
  },
  {
    name: "オレの爪サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-08-31",
      pickup: {
        真57R: 0.007,        
        真23: 0.0035,
        真25: 0.0035,
        真64: 0.0035,
      }
    }
  },
  {
    name: "雅な着こなし",
    rate_settings: {
      megido_back_of: "2020-09-05",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖23: 0.006,
        祖28: 0.006,
        祖23R: 0.006
      }
    }
  },
  {
    name: "ジズリジェネ",
    rate_settings: {
      megido_back_of: "2020-09-10",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真52R: 0.012,
        祖54: 0.006
      }
    }
  },  
  {
    name: "混ぜるな危険",
    rate_settings: {
      megido_back_of: "2020-09-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真19: 0.006,
        祖41R: 0.006
      }
    }
  },
  {
    name: "手数の多さスター",
    rate_settings: {
      megido_back_of: "2020-09-20",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖16: 0.006,
        祖29: 0.006,
        祖47: 0.006,
        真2: 0.006,
        祖7R: 0.006
      }
    }
  },
  {
    name: "聡明少女怪しい仮面",
    rate_settings: {
      megido_back_of: "2020-09-25",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖55: 0.006,
        祖55R: 0.006,
        祖71: 0.006,
        祖71R: 0.006,
      }
    }
  },
  {
    name: "ビリビリバニーサバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-09-30",
      pickup: {
        真24: 0.007,
        真57R: 0.0035,
        真58: 0.0035,
        真69: 0.0035,
      }
    }
  },
  {
    name: "魅惑のオールナイト",
    rate_settings: {
      megido_back_of: "2020-10-05",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖60: 0.006,
        祖4: 0.006,
        真36: 0.006,
        真9R: 0.006,
        真22R: 0.006
      }
    }
  },
  {
    name: "死に真摯！",
    rate_settings: {
      megido_back_of: "2020-10-10",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真16: 0.012,
        祖46R: 0.006
      }
    }
  },
  {
    name: "親孝行メギド",
    rate_settings: {
      megido_back_of: "2020-10-16",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖40R: 0.006,
        祖44R: 0.006,
      }
    }
  }, 
  {
    name: "バッド＆スイート",
    rate_settings: {
      megido_back_of: "2020-10-21",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖16: 0.006,
        祖16R: 0.006,
        祖64: 0.006,
        祖5: 0.006
      }
    }
  },
  {
    name: "切れてるレディ",
    rate_settings: {
      megido_back_of: "2020-10-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真17: 0.006,
        真38R: 0.006
      }
    }
  },
  {
    name: "辛辣！名幼護士サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-10-31",
      pickup: {
        真61: 0.012,
        真64: 0.0035,
        真71: 0.0035,
        真24: 0.0035,
      }
    }
  },
  {
    name: "パワーが肝心！",
    rate_settings: {
      megido_back_of: "2020-11-05",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖38: 0.006,
        祖26R: 0.006,
        祖35R: 0.006,
        祖36R: 0.006
      }
    }
  },
  {
    name: "瀕死はチャンス！",
    rate_settings: {
      megido_back_of: "2020-11-09",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖28: 0.006,
        祖52: 0.006,
        真9R: 0.006,
        真22R: 0.006
      }
    }
  },
  {
    name: "熱血対応！サバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-11-22",
      pickup: {
        真44: 0.007,
        真23: 0.0035,
        真25: 0.0035,
        真68: 0.0035
      }
    }
  },
  {
    name: "生ける伝説たち",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-12-01",
      pickup: {
        真44: 0.0035,
        真69: 0.0035,
        真4R: 0.0035,
        真57R: 0.0035
      }
    }
  },
  {
    name: "ベリアルBサバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2020-12-07",
      pickup: {
        祖68R: 0.012,
        真24: 0.0035,
        真64: 0.0035,
        真61: 0.006
      }
    }
  },
  {
    name: "轟くレジェンド！",
    rate_settings: {
      megido_back_of: "2020-12-14",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖25R: 0.012,
        祖17: 0.006
      }
    }
  },
  {
    name: "ふわもこスノー",
    rate_settings: {
      megido_back_of: "2020-12-18",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖31: 0.006,
        祖72: 0.006,
        祖45R: 0.006,
        祖29R: 0.006
      }
    }
  },
  {
    name: "ジズR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-22",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真52R: 0.02
      }
    }
  },
  {
    name: "バティンB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-23",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖18R: 0.02
      }
    }
  },
  {
    name: "フルフルC魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-24",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖34R: 0.02
      }
    }
  },
  {
    name: "アイムR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-25",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖23R: 0.02
      }
    }
  },
  {
    name: "フォカロルR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-26",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖41R: 0.02
      }
    }
  },
  {
    name: "ブネB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-27",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖26R: 0.02
      }
    }
  },
  {
    name: "サタナキアB魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-28",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真15R: 0.02
      }
    }
  },
  {
    name: "ビフロンスC魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-29",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖46R: 0.02
      }
    }
  },
  {
    name: "クロケルR魔吊",
    rate_settings: {
      base_rate: 0.05,
      megido_back_of: "2020-12-30",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        祖49R: 0.02
      }
    }
  },
  {
    name: "悲劇を乗り越えし策王",
    rate_settings: {
      megido_back_of: "2021-01-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真41R: 0.012,
        祖41R: 0.006
      }
    }
  },
  {
    name: "フルカスCサバト",
    rate_settings: {
      base_rate: 0.1,
      megido_back_of: "2021-01-31",
      pickup: {
        祖50R: 0.012,
        真47: 0.0035,
        真58: 0.0035,
        真64: 0.0035
      }
    }
  },
  {
    name: "コレチケ5枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-10-31",
      exclude: megido =>{
        return !(megido.gender === "f");
      }
    }
  },
  {
    name: "コレチケ10枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-10-31",
      exclude: megido => {
        return !(
          megido.gender === "f" && 
          ( 
          megido.clock_type === "真" ||
          megido.regenerated ||
          megido.terminus
          )
        );
      }
    }
  },
  {
    name: "コレチケ15枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-10-31",
      exclude: megido => {
        return !(
          megido.gender === "f" &&
          (megido.regenerated || megido.terminus));
      }
    }
  },
  {
    name: "二人で一人の最強コンビ",
    rate_settings: {
      megido_back_of: "2021-03-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {
        真50R: 0.012,
        祖23R: 0.006
      }
    }
  },
  {
    name: "男コレチケ5枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-12-01",
      exclude: megido => {
        return !(megido.gender === "m");
      }
    }
  },
  {
    name: "男コレチケ10枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-12-01",
      exclude: megido => {
        return !(
          megido.gender === "m" &&
          (megido.clock_type === "真" || megido.regenerated || megido.terminus)
        );
      }
    }
  },
  {
    name: "男コレチケ15枚",
    rate_settings: {
      base_rate: 1.0,
      megido_back_of: "2020-12-01",
      exclude: megido => {
        return !(
          megido.gender === "m" &&
          (megido.regenerated || megido.terminus)
        );
      }
    }
  },
  {
    name: "救済の伝道師",
    rate_settings: {
      megido_back_of: "2021-04-15",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {        
        祖30R: 0.012,
        真16: 0.006
      }
    }
  },
  {
    name: "砦がツボ",
    rate_settings: {
      megido_back_of: "2021-05-14",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {        
        真46: 0.012
      }
    }
  },
  */
  {
    name: "21グラム",
    rate_settings: {
      megido_back_of: "2021-07-14",
      exclude: megido => {
        return megido.terminus;
      },
      pickup: {       
        真62R: 0.012, 
        真46: 0.006
      }
    }
  },
];

export default GachaListData;