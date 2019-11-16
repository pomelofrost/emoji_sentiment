var yourVlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v2.0.json',
    description: 'A simple bar chart with embedded data.',
    data: {url:"neutral.csv"},
    mark: 'bar',
    title: "Neutrality Score within Neutrality-Defined Emoji",
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
  vegaEmbed('#graph', yourVlSpec);
