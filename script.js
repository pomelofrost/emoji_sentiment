var positive = {
  $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
  description: 'A simple bar chart with embedded data.',
  width:800,
  height:600,
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
      "axis": {title: 'Neutrality-Defined Emoji'}
    },
    y: {
      "field": "Positive", 
      "type": "quantitative",
      "axis": {title: 'Neutrality Score'}
    },
    "color": {"value": "#ffa500"},
  }
};
vegaEmbed('#positive', positive);


var neutralbar = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    width:800,
    height:600,
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
        "axis": {title: 'Neutrality-Defined Emoji'}
      },
      y: {
        "field": "Neutral", 
        "type": "quantitative",
        "axis": {title: 'Neutrality Score'}
      },
      "color": {"value": "#ff9900"},
    }
  };
  vegaEmbed('#neutral', neutralbar);

  var negative = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    width:800,
    height:600,
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
        "axis": {title: 'Neutrality-Defined Emoji'}
      },
      y: {
        "field": "Negative", 
        "type": "quantitative",
        "axis": {title: 'Neutrality Score'}
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
          tooltip:{"field":"emoji"}
      }
      };
      vegaEmbed('#readervwriter', readervwriter);

    