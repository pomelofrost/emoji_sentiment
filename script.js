var positive = {
  $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
  description: 'A simple bar chart with embedded data.',
  width:300,
  height:300,
  data: {url:"positive.csv"},
  mark: 'bar',
  title: "Positivity Score within Positive-Defined Emoji",
  encoding: {
    x: {
      "bin": "false",
      "field": "Emoji", 
      "type": "nominal",
      "sort": "-y",
      "orient": "right",
      "axis": {title: 'Positivly-Defined Emoji',labelAngle:"0",labelFontSize:30}
    },
    y: {
      "field": "Positive", 
      "type": "quantitative",
      "axis": {title: 'Positivity Score'}
    },
    "color": {"value": "#ffa500"},
  }
};
vegaEmbed('#positive', positive);


var neutralbar = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    width:300,
    height:300,
    data: {url:"neutral.csv"},
    mark: 'bar',
    title: "Neutrality Score within Neutral-Defined Emoji",
    encoding: {
      x: {
        "bin": "false",
        "field": "Emoji", 
        "type": "nominal",
        "sort": "-y",
        "orient": "right",
        "axis": {title: 'Neutrally-Defined Emoji',labelAngle:"0",labelFontSize:30}
      },
      y: {
        "field": "Neutral", 
        "type": "quantitative",
        "axis": {title: 'Neutrality Score'}
      },
      "color": {"value": "#D8D8D8"},
    }
  };
  vegaEmbed('#neutral', neutralbar);

  var negative = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    width:300,
    height:300,
    data: {url:"negative.csv"},
    mark: 'bar',
    title: "Negativity Score within Negative-Defined Emoji",
    encoding: {
      x: {
        "bin": "false",
        "field": "Emoji", 
        "type": "nominal",
        "sort": "-y",
        "orient": "right",
        "axis": {title: 'Negatively-Defined Emoji',labelAngle:"0",labelFontSize:30}
      },
      y: {
        "field": "Negative", 
        "type": "quantitative",
        "axis": {title: 'Negativity Score'}
      },
      "color": {"value": "#E15759"},
    }
  };
  vegaEmbed('#negative', negative);

  var readervwriter = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
        description: 'A simple bar chart with embedded data.',
        width:800,
        height:800,
        data: {url: "readervswriter_cleaned.csv"},
        mark: "point",
        title: "Reader vs. Writer Sentiment",
        encoding: {
            x :{"field": "reader", "type": "quantitative"},
            y: {"field": "writer", "type": "quantitative"},
            // text:{field:"emoji"},
      }
      };
      vegaEmbed('#readervwriter', readervwriter);

var position = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  data: {url: "Positions.csv"},
  "vconcat": [{
    width: 400,
    height: 100,
    mark: "text",
    encoding: {
      x: {
        "field": "NePosition", 
        "type": "quantitative",
      },
      text:{field:"NeEmoji"}
    }
  },{
    width: 400,
    height: 100,
    mark: "text",
    encoding: {
      x: {
        "field": "PPosition", 
        "type": "quantitative"
      },
      text:{field:"PEmoji"},
      "size": {"value": 35}
    }
  },{
    width: 400,
    height: 100,
    mark: "text",
    encoding: {
      x: {
        "field": "NUPosition", 
        "type": "quantitative"
      },
      text:{field:"NUEmoji"},
      "size": {"value": 35}
    }
  }
  ]
}

vegaEmbed('#position', position);

