import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button'
import FlatButton from 'material-ui/lib/flat-button';
import IconEmail from 'material-ui/lib/svg-icons/communication/email'
import { translate } from 'react-i18next/lib'
import IllustratedDialog from './IllustratedDialog.react'
import styles from '../../constants/Styles'
import EmailField from '../../inputs/EmailField'

class SignInDialog extends React.Component {
  sendMail() {
    const mail = this._input.getValue()
    if (mail) {
      // TODO
    }
  }
  render() {
    const { t } = this.props
    return (
      <IllustratedDialog
        title="Lantern PRO Sign In"
        icon = {this.props.icon}
        illustration="sign-in-modal.svg">
        <div id="signin_input" className="input_inline">
          <div className="input_inline_icon">
            <IconEmail style={styles.iconStyles} />
          </div>
          <div className="input_inline_text">
            <EmailField
              style={styles.textInputInline}
              hintText={t('input.enter_email')}
              floatingLabelText={t('input.email')}
              errorMail = {t('input.use_valid_email')}
              errorText = {t(this.props.error)}
              ref={(c) => this._input = c} />
          </div>
        </div>
        <ul id="signin_list">
          <li>Enter the email associated with your Lantern PRO account and we will sent you a link</li>
          <li>Click the link to autorize this device to use your Lantern PRO account</li>
        </ul>
        <div id="signin_button">
          <RaisedButton
            label="Send Link"
            className="button__blue"
            labelStyle={styles.buttonBlue}
            onTouchTap={this.sendMail.bind(this)}
          />
        <FlatButton label="Go Pro Now" labelStyle={styles.linkButtonStyle} />
        </div>
      </IllustratedDialog>
    )
  }
}

SignInDialog.propTypes = {
  icon: React.PropTypes.object,
  t: React.PropTypes.func,
  error: React.PropTypes.string,
}

export default translate(['translation'])(SignInDialog)