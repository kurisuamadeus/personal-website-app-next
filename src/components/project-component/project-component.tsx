"use client";

import { useLanguageStore } from "@/store/store";

const logoUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABW9JREFUeF7tmNdu3EAMRWfde4d7t2HA//8bfjXg3nvvhusGd4AxZFlaaQgzYIKrlyAJSXHuYRltZWlpqer4mFGgQiBmWPhECMQWDwIxxoNACMSaAsby4Q4hEGMKGEuHHUIgxhQwlg47hECMKWAsHXYIgRhTwFg67BACMaaAsXTYIQRiTAFj6bBDCMSYAsbSYYcQiDEFjKXDDiEQYwoYS4cdQiDGFDCWDjuEQIwpYCwddgiBGFPAWDrsEAIxpoCxdNghBGJMAWPpsEMIxJgCxtJhhxCIMQWMpcMOIRBjChhLhx3yLwPp6+tzExMT7vn52a2trf04Sn19vRsdHXWwa2hocNVq1b28vLjT01N3cXHxzT7G9m9oNj8/7zo6Otz+/r67vLz88cquri43NjbmWltbXaVScZ+fn+7m5sYdHh6619fXb/YxtukXle6QlpYWNzs76xO6v7/PBDI9Pe1hfHx8uIeHBw+lvb3dJ4/Ez8/Pv94fY6sNBEIPDg76AsoC0t3d7SYnJ11jY6MvRhQZztXU1OTu7u7c1taWPzOeGNusc5UCgpejM/AnniwgAwMDbnx83Iu/u7vrbm9vvS0OOzQ09NVVSDzGVhsGOhow0LHILQvIwsKC6+zsdFdXV257e9unFAq0ubnZHR8fu5OTE//vMbYiIMPDw15QVPv7+7v/MwvIzMyM747r62tfMeFB4hgHqK6DgwPfJTG2WkBQXIABodEZeLI6BBU/NTXlx9TOzs5XocEeBQiYj4+PbnV11XdHWdu8c9XsECQL8QABrQkg/f39mUAWFxf9OEOlHB0dfXtfqBrA2NvbczG2WYkHIUJFo3LT4+Ls7MwXQN4D4dCpOBN2HIStq6v70SEoyJGREb8nVlZWvkYT4kILTA7kgSKEXmVtATG6Q/ACjBwsLwgdDpHukGQXoOXTCxz7AsmHJRg6psh2c3MzM2mMl7CEsas2Nja83dzcnBcF+cE3zPWsINgJGDcoHoBA4WUBCfDxnvRFBssbZ0P3oNDQdQBbxhaTJBpI2iEPSOikrAMhRtIP8zbv8GnbrJtcyKmnp8fHBRwUC0TBaH17e/PihB1WZuTVyj/vzIib9sMtDV2XNdKLNAp5llrqwdgSkOQMx9gBEBQERhVudDEPgeSMh5gOgW1ydOHv2HPr6+sxLLztfwek7A7B3MTMLrND0re1PJXDtRr/X7TI82LUAlJ2h+AGhjhldkj6tpbM61dGFgLG3JxibGuVe7hm4kqNB/sj+Q1UtlVqAUnespaXl7+FrHXLKrIV3bLKLnXYxXxbxNjmiYpxFW5VGFV4cOspc8NKx6wFJObbIsY271y/1iF5X9+h5cPvX7W+1LNsi0YVFjq6IuwffDPhuyJmsRfdgPK+vsPoLfOlnmWbdbZfA4LgMb9PxdimEw+VCPGTeyMADZDKXn2LgMT8PhVjqw4EYwSi9Pb2+htQ0a+9ZW2TiSdH1dPTk/9YCx+A+D9Uc1tbW9ToKgKC9+O7Bz+14AJT9GtvjG0aSlSHlF2StJMrQCBy7VQ8CURFVnlQApFrp+JJICqyyoMSiFw7FU8CUZFVHpRA5NqpeBKIiqzyoAQi107Fk0BUZJUHJRC5diqeBKIiqzwogci1U/EkEBVZ5UEJRK6diieBqMgqD0ogcu1UPAlERVZ5UAKRa6fiSSAqssqDEohcOxVPAlGRVR6UQOTaqXgSiIqs8qAEItdOxZNAVGSVByUQuXYqngSiIqs8KIHItVPxJBAVWeVBCUSunYongajIKg9KIHLtVDwJREVWeVACkWun4kkgKrLKgxKIXDsVTwJRkVUelEDk2ql4EoiKrPKgBCLXTsWTQFRklQclELl2Kp5/AODxqVz8Q0ugAAAAAElFTkSuQmCC";

interface ProjectComponentProps {
    imgUrl: string,
    projectId: string,
    projectName: string
}
export default function ProjectComponent({ imgUrl, projectId, projectName }: ProjectComponentProps) {
    const { lang } = useLanguageStore();
    return (
        <a className='grid group place-items-center text-center text-white w-[25vw] h-[15vw] no-underline hover:bg-[#F0F8FF]' href={`/${lang}/projects/details/` + projectId}>
            {imgUrl != '' ? <iframe className="w-[18vw] h-[10vw] mt-[1vh] pointer-events-none" src={imgUrl}></iframe> : <img className="w-[18vw] h-[10vw] mt-[1vh]" src={imgUrl != '' ? imgUrl : logoUrl} />}
            <p className="group-hover:text-black text-[1.2vw]">{projectName != '' ? projectName : "Sample Project"}</p>
        </a>
    )
}