import './dataCard.css';
import CloseIcon from "@mui/icons-material/Close";

function DataCard(props) {
    return (
        <div className='card pt-2 pl-3 pr-1'>
            <div className='flex justify-between'>
                <div className='cardHeader'>
                    {props?.data?.title ? props.data.title : 'Add Widget'}
                </div>
                {(props?.data?.title) &&
                    <div
                        className="icons pr-3 cursor-pointer self-center"
                        onClick={() => props.handleDeleteWidgetDashboard(props.index, props.category)}
                    >
                        <CloseIcon fontSize='small' />
                    </div>}
            </div>
            <div className='cardBody mt-2 grid content-center'>
                {!(props?.data?.title) ?
                    <div className='flex justify-center'>
                        <div>
                            <div className='addWidgetBtnCard' onClick={() => props.openSideBar(props.category)}>
                                Add Widget &nbsp; <span style={{ fontSize: "16px" }}>+</span>
                            </div>
                        </div>
                    </div> :
                    <div className='text-center'>
                        {props?.data?.desc ? props?.data?.desc : 'No Data Available'}
                    </div>
                }
            </div>
        </div>
    )
}

export default DataCard;