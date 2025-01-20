function percentToPixels(percent) {
  // اطمینان از اینکه درصد در محدوده 0 تا 100 است
  if (percent < 0 || percent > 100) {
    throw new Error("Percent must be between 0 and 100");
  }

  // محاسبه پیکسل معادل
  const minPixels = 251; // 0% معادل 314px
  const maxPixels = 0;    // 100% معادل 0px

  // محاسبه پیکسل
  const pixels = minPixels + (maxPixels - minPixels) * (percent / 100);
  return pixels;
}

export default function Progress({color , title , progressNumber}) {
    
  return (
    <div className='flexColCenter'>
      <svg className='*:duration-150 *:transition-all'  width={100} height={100} viewBox="-12.5 -12.5 125 125" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{transform: 'rotate(-90deg)'}}>
            <circle  r={40} cx={50} cy={50} fill="transparent" stroke="#747d85" strokeWidth={8} />
            <circle r={40} cx={50} cy={50} stroke={progressNumber ? color : '#747d85'} strokeWidth={8} strokeLinecap="round" strokeDashoffset={percentToPixels(progressNumber)} fill="transparent" strokeDasharray="251.20000000000002px" />
            <text x="29px" y="57px" fill={color} fontSize="22px" fontWeight="bold" style={{transform: 'rotate(90deg) translate(0px, -96px)'}}>{progressNumber}%</text>
      </svg>
      <p style={{color}} className='capitalize text-lg font-semibold -mt-4'>{title}</p>
    </div>
  )
}
