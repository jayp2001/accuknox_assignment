import './dashboard.css'
import React from 'react';
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import SyncIcon from '@mui/icons-material/Sync';
import DataCard from '../component/dataCard';
import { useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from '@mui/material/Checkbox';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { updateWidget, setSuccessfalse } from '../../action/dashboardAction';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    outline: 'none',
    borderRadius: '5px',
    padding: '0px 10px 10px 10px',
    boxShadow: 24,
};
const tempCategory = [
    'CSPM',
    'CWPP',
    'Image',
    'Ticket'
]
const tempData = {
    CSPM: [
    ],
    CWPP: [],
    Image: [],
    Ticket: [],
}

function Dashboard() {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [widgetList, setWidgetList] = useState([]);
    const [tempWidgetList, setTempWidgetList] = useState();
    const [tab, setTab] = useState(0);
    const loading = useSelector((state) => state.widgetData.loading);
    const error = useSelector((state) => state.widgetData.error);
    const success = useSelector((state) => state.widgetData.success);
    const dataList = useSelector((state) => state.widgetData.widgetList);
    const [customWidgetFormdata, setCustomWidgetFormdata] = useState({
        title: '',
        desc: '',
        active: true
    })
    const dispatch = useDispatch();
    const handleDispatch = () => {
        if (window.confirm("Are you sure you want to save changes ...!")) {
            const tabName = tempCategory[tab]
            const newData = {
                ...tempWidgetList,
                [tabName]: widgetList
            }
            dispatch(updateWidget(newData));
            setOpen(false)
        }
    }
    const handleDeleteWidget = (indexTodelete) => {
        if (window.confirm("Are you sure you want to delete widget...?")) {
            setWidgetList(widgetList?.filter((_, index) => index != indexTodelete))
        }
    }
    const handleDeleteWidgetDashboard = (indexTodelete, category) => {
        if (window.confirm("Are you sure you want to delete widget...?")) {
            const categoryName = tempCategory[category]
            const temArray = dataList[categoryName]?.filter((_, index) => index != indexTodelete)
            const newArray = {
                ...dataList,
                [categoryName]: temArray
            }
            dispatch(updateWidget(newArray))
        }
    }
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);
    const DrawerList = (
        <Box sx={{ width: 'auto', minWidth: 375 }} role="presentation">
            <div className="flex justify-between items-center sideBarHeader">
                <div className="p-2 my-1 text-base">Add Widgets</div>
                <div
                    className="icons pr-3 cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <CloseIcon />
                </div>
            </div>
            <div style={{ padding: '0px 5px 10px 5px' }}>
                <div className='flex'>
                    <div className={`flex col-span-3 justify-center ${tab === null || tab === 0 || !tab ? 'categoryTabActive' : 'categoryTab'}`} onClick={() => {
                        const tabName = tempCategory[tab]
                        setTempWidgetList((perv) => ({
                            ...perv,
                            [tabName]: widgetList
                        }))
                        setTab(0);
                        setWidgetList(tempWidgetList[tempCategory[0]])
                    }}>
                        <div className='statusTabtext'>CSPM</div>
                    </div>
                    <div className={`flex col-span-3 justify-center ${tab == 1 ? 'categoryTabActive' : 'categoryTab'}`} onClick={() => {
                        const tabName = tempCategory[tab]
                        setTempWidgetList((perv) => ({
                            ...perv,
                            [tabName]: widgetList
                        }))
                        setTab(0);
                        setTab(1);
                        setWidgetList(tempWidgetList[tempCategory[1]])
                    }}>
                        <div className='statusTabtext'>CWPP</div>
                    </div>
                    <div className={`flex col-span-3 justify-center ${tab === 2 ? 'categoryTabActive' : 'categoryTab'}`} onClick={() => {
                        const tabName = tempCategory[tab]
                        setTempWidgetList((perv) => ({
                            ...perv,
                            [tabName]: widgetList
                        }))
                        setTab(0);
                        setTab(2);
                        setWidgetList(tempWidgetList[tempCategory[2]])
                    }}>
                        <div className='statusTabtext'>Image</div>
                    </div>
                    <div className={`flex col-span-3 justify-center ${tab === 3 ? 'categoryTabActive' : 'categoryTab'}`} onClick={() => {
                        const tabName = tempCategory[tab]
                        setTempWidgetList((perv) => ({
                            ...perv,
                            [tabName]: widgetList
                        }))
                        setTab(0);
                        setTab(3);
                        setWidgetList(tempWidgetList[tempCategory[3]])
                    }}>
                        <div className='statusTabtext'>Ticket</div>
                    </div>
                </div>
                <div className='widgetListContainer'>
                    <div className='px-2 mt-4 grid gap-2'>
                        {widgetList?.map((data, index) => (
                            <div className=' widgetList flex justify-between' key={'widget_' + index}>
                                <div className='flex'>
                                    <Checkbox
                                        inputProps={{ 'aria-label': 'Checkbox demo' }}
                                        style={{
                                            color: "#15157d",
                                        }} size="small"
                                        checked={data.active}
                                        onChange={() => setWidgetList(widgetList?.map((widget, index1) =>
                                            index == index1 ? { ...widget, active: !widget.active } : widget
                                        ))}
                                    />
                                    <div className='self-center widgetName ml-1'>
                                        {data.title}
                                    </div>
                                </div>
                                <div
                                    className="icons pr-3 cursor-pointer self-center"
                                    onClick={() => handleDeleteWidget(index)}
                                >
                                    <CloseIcon />
                                </div>
                            </div>
                        ))
                        }
                        <div className='cardBody mt-2 grid content-center'>
                            <div className='flex justify-center'>
                                <div>
                                    <div className='addWidgetBtnCard' onClick={() => handleOpen()}>
                                        Add New Widget &nbsp; <span style={{ fontSize: "16px" }}>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 mt-4 mr-2'>
                    <button className='cancelBtn' onClick={() => setOpen(false)}>Cancel</button>
                    <button className='addBtn' onClick={() => handleDispatch()}>Confirm</button>
                </div>
            </div>
        </Box>
    );

    const handleAddCustomWidget = () => {
        if (customWidgetFormdata.title) {
            setWidgetList([...widgetList, { title: customWidgetFormdata.title, desc: customWidgetFormdata.desc, active: true }]);
            setCustomWidgetFormdata({
                title: '',
                desc: '',
                active: true
            })
            setOpenModal(false);
        } else {
            window.alert('Please Enter Titel...!')
        }
    }

    const openSideBar = (category) => {
        const categoryName = tempCategory[category];
        setTab(category);
        setTempWidgetList(dataList)
        setWidgetList(dataList[categoryName])
        setOpen(true);
    }

    useEffect(() => {
        dispatch(updateWidget(tempData));
    }, [])

    return (
        <div className="mainDiv px-6 pt-4">
            <div className='headerSection flex justify-between'>
                <div className='font-medium text-base pt-1'>
                    CNAPP Dashboard
                </div>
                <div className='flex justify-between gap-3'>
                    <div className='addWidgetBtn' onClick={() => openSideBar(0)}>
                        Add Widget &nbsp; <span style={{ fontSize: "16px" }}>+</span>
                    </div>
                    {/* <div className='addWidgetBtn pt-2'>
                        <SyncIcon fontSize='small' />
                    </div> */}
                    {/* <div className='addWidgetBtn pt-2'>
                        <SyncIcon fontSize='small' />
                    </div> */}
                </div>
            </div>
            <div className='bodySection px-2 mt-3'>
                <div className='categoryHeader'>
                    CSPM Executive Dashboard
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4'>
                    {
                        dataList?.CSPM?.map((data, index) => (
                            data?.active ?
                                <DataCard data={data} openSideBar={openSideBar} handleDeleteWidgetDashboard={handleDeleteWidgetDashboard} index={index} category={0} /> : <></>
                        ))
                    }
                    <DataCard data={''} openSideBar={openSideBar} category={0} />
                </div>
                <div className='categoryHeader mt-4'>
                    CWPP Dashboard
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4'>
                    {
                        dataList?.CWPP?.map((data, index) => (
                            data?.active ?
                                <DataCard data={data} openSideBar={openSideBar} handleDeleteWidgetDashboard={handleDeleteWidgetDashboard} index={index} category={1} /> : <></>
                        ))
                    }
                    <DataCard data={''} openSideBar={openSideBar} category={1} />
                </div>
                <div className='categoryHeader mt-4'>
                    Image Dashboard
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4'>
                    {
                        dataList?.Image?.map((data, index) => (
                            data?.active ?
                                <DataCard data={data} openSideBar={openSideBar} handleDeleteWidgetDashboard={handleDeleteWidgetDashboard} index={index} category={2} /> : <></>
                        ))
                    }
                    <DataCard data={''} openSideBar={openSideBar} category={2} />
                </div>
                <div className='categoryHeader mt-4'>
                    Ticket Dashboard
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-4'>
                    {
                        dataList?.Ticket?.map((data, index) => (
                            data?.active ?
                                <DataCard data={data} openSideBar={openSideBar} handleDeleteWidgetDashboard={handleDeleteWidgetDashboard} index={index} category={3} /> : <></>
                        ))
                    }
                    <DataCard data={''} openSideBar={openSideBar} category={3} />
                </div>
            </div>
            <React.Fragment key={"right"}>
                <Drawer
                    anchor={"right"}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    {DrawerList}
                </Drawer>
            </React.Fragment>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex justify-between items-center">
                        <div className="p-2 my-1 text-lg" style={{ fontWeight: '500' }}>Add Widget For</div>
                        <div
                            className="icons pr-1 cursor-pointer"
                            onClick={() => setOpenModal(false)}
                        >
                            <CloseIcon />
                        </div>
                    </div>
                    {/* <div className=''>Add Widget For</div> */}
                    <div className='py-2 px-2'>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-4'>
                                <TextField id="outl" label="Title" variant="outlined" value={customWidgetFormdata.title}
                                    onChange={(e) => {
                                        setCustomWidgetFormdata((prev) => ({
                                            ...prev,
                                            title: e.target.value
                                        }))
                                    }} />
                            </div>
                            <div className='col-span-8'>
                                <TextField id="outlined-basic" fullWidth label="Description" variant="outlined"
                                    value={customWidgetFormdata.desc}
                                    onChange={(e) => {
                                        setCustomWidgetFormdata((prev) => ({
                                            ...prev,
                                            desc: e.target.value
                                        }))
                                    }} />
                            </div>
                        </div>
                        <div className='flex justify-end gap-4 mt-4'>
                            <button className='addBtn' onClick={() => handleAddCustomWidget()}>Add</button>
                            <button className='cancelBtn' onClick={() => setOpenModal(false)}>Cancel</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default Dashboard;