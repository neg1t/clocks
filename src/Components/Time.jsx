import { connect } from "react-redux"
import Clock from './Clock';
import UtcVariable from "./UtcVariable";

let Time = ({
  utc
}) => {

  return (
    <section className='clocks'>
      <article className='left-clock'>
        <Clock utc={utc.left} />
        <UtcVariable props='left'/>
      </article>
      <article className='right-clock'>
        <Clock utc={utc.right} />
        <UtcVariable props='right'/>
      </article>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    utc: state.reducer.utc
  }
}

export default Time = connect(mapStateToProps)(Time);