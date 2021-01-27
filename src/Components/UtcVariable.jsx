import { useForm } from "react-hook-form";
import { connect } from "react-redux"


let UtcVariable = ({
  dispatch,
  props
}) => {
  const { register, handleSubmit } = useForm();
  const onChangeHandler = (data) => {
    if (props === 'left') {
      dispatch ({
        type: 'CHANGE_UTC_LEFT',
        leftNewUtc: data.utc
      })
    } else {
      dispatch ({
        type: 'CHANGE_UTC_RIGHT',
        leftNewUtc: data.utc
      })
    }
  }

  return (
    <select defaultValue='default' onChange={handleSubmit(onChangeHandler)} className='utc-select' name="utc" id="utc-select" ref={register}>
      <option hidden value='default'>Выберите часовой пояс</option>
      <option value="Asia/Vladivostok">Владивосток</option>
      <option value="Europe/Kaliningrad">Калининград</option>
      <option value="Asia/Krasnoyarsk">Красноярск</option>
      <option value="Europe/Moscow">Москва</option>
    </select>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default UtcVariable = connect(mapDispatchToProps)(UtcVariable);