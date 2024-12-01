import '../styles/grid_item.css';

const GridItem = ({ activity, hours, info, last, className, backgroundColor, svg: SvgComponent }) => {
    return (
        <div className='grid-item' style={{ backgroundColor }}>
            <SvgComponent/> 
            <div className='grid-item-child'>
                <div className={className}>
                    <div className='child-header'>
                        <h3>{activity}</h3>
                        <h3>...</h3>
                    </div>
                    <div className='child-content'>
                        <h1>{hours}hrs</h1>
                        <h3>{info} - {last}hrs</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridItem;
