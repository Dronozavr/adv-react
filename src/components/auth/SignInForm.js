import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';


class SighInForm extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h2>Sign |In</h2>
        <form>
          <div>
            <label>Email</label>
            <Field name="email" component="input" />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component="input" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }

}

export default reduxForm({
  form: "auth"
})(SighInForm);
