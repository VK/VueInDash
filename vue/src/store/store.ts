import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export class DashRequest {
  name: string;
  data: any;

  constructor(name: string, data: any) {
    this.name = name;
    this.data = data;
  }
}

class DashResult {
  name: string;
  data: any;

  constructor(name: string, data: any) {
    this.name = name;
    this.data = data;
  }
}

export default new Vuex.Store({
  state: {
    loading: false,
    error: false,
    errorNote: "Super",
    callbackA: [
      { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
      { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
      { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
      { age: 38, first_name: 'Jami', last_name: 'Carney' }
    ]
  },

  mutations: {
    commit_dash_data(context, result: DashResult) {
      // add the requests which change the state
      if (result.name === "callbackA")
        context.callbackA = result.data;
    },

    start_loading(context) {
      context.loading = true;
    },

    end_loading(context) {
      context.loading = false;
    },

    report_error(context, errorNote: string) {
      context.error = true;
      context.errorNote = errorNote;
    }

  },
  actions: {
    get_dash_data(context, call: DashRequest) {
      context.commit("start_loading");
      axios.post('_dash-update-component',
        {
          "output": call.name + ".output",
          "inputs": [{ "id": call.name, "property": "input", "value": call.data }],
          "changedPropIds": [call.name + ".input"]
        }).then(function (response) {
          if ("multi" in response.data && response.data.multi) {
            context.commit("commit_dash_data", new DashResult(call.name, response.data.response[call.name].output));
          } else {
            context.commit("commit_dash_data", new DashResult(call.name, response.data.response.props.output));
          }
          context.commit("end_loading");
        }).catch(error => {
          console.log(error);
          context.commit("report_error", error);
        });
    }
  }
});