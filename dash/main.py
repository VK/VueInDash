from dash.dependencies import Input, Output
import dash
import dash_html_components as html
import dash_daq as daq


# create dash app
app = dash.Dash("Main")
app.config['suppress_callback_exceptions'] = False
app.layout = html.Div()

# sample callback
@app.callback(
    Output(component_id='callbackA', component_property='output'),
    [Input(component_id='callbackA', component_property='input')]
)
def callbackA(input):
    output = [*input, *input, *input, *input]
    return output


# end dash app
if __name__ == '__main__':
    app.run_server(host="localhost", debug=True)
