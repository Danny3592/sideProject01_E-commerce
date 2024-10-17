import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../store/fansgathering-slice';
export default function FansGather() {
    const dispatch = useDispatch()
    const power = useSelector((state)=>state.fansGathering.value)
  return (
    <div id='gathering'>
      <span id='power-count'>{power}</span>
      <button type="button" className="power-btn" onClick={()=>{dispatch(increment())}}>支持文章</button>
      <button type="button" className="power-btn" onClick={()=>{dispatch(decrement())}}>倒讚文章</button>
    </div>
  );
}
