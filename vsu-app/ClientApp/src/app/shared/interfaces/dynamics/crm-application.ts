export interface iApplicationFormCRM {
    Application: iCRMApplication;
    CourtInfoCollection: iCRMCourtInfo[];
    DocumentCollection: iCRMDocument[];
    OffenceCollection?: iCRMOffence[];
    PoliceFileNumberCollection: iCRMPoliceFileNumber[];
    ProviderCollection: iCRMParticipant[];
    TravelInfoCollection?: iCRMTravelInfo[];
}

export interface iCRMApplication {
    vsd_vsu_offencescomments?: string;
    vsd_vsu_decision1impacttooutcome?: number;
    vsd_vsu_decision1comments?: string;
    vsd_vsu_decision2travelover100km?: number;
    vsd_vsu_decision2comments?: string;
    vsd_vsu_decision3nootherfundingsource?: number;
    vsd_vsu_decision3comments?: string;
    vsd_vsu_additionalcomments?: string;

    vsd_vsu_applicationtype: number;
    vsd_cvap_victimfirstname: string;
    vsd_cvap_victimmiddlename: string;
    vsd_cvap_victimlastname: string;
    vsd_cvap_victimbirthdate: Date;
    vsd_cvap_victimgendercode: number;
    vsd_indigenous: number;

    vsd_vsu_applicanttype: number;
    vsd_vsuapplicanttypeother?: string;
    vsd_cvap_relationshiptovictim?: string;

    vsd_vsu_victimtravelfundapplicationsubmitted?: number;
    vsd_vsu_vtfappsubmittedunknowncomments?: string;

    vsd_vsu_otherfamilymembersapplyingtovtf?: number;
    vsd_vsu_otherfamilymembersvtfothercomments?: string;

    vsd_vsu_vswcomments?: string;

    vsd_vsu_costscoveredbyvsp?: number;
    vsd_vsu_vspcomments?: string;

    vsd_vsu_managerfirstname?: string;
    vsd_vsu_managerlastname?: string;
    vsd_vsu_organizationagencyname?: string;
    vsd_vsu_managerphone?: string;
    vsd_vsu_manageremail?: string;

    vsd_applicantsfirstname: string;
    vsd_applicantsmiddlename: string;
    vsd_applicantslastname: string;
    vsd_otherfirstname?: string;
    vsd_otherlastname?: string;
    vsd_dateofnamechange?: Date;
    vsd_applicantsgendercode: number;
    vsd_applicantsbirthdate: Date;
    vsd_applicantsmaritalstatus: number;
    vsd_applicantspreferredlanguage: string;
    vsd_applicantsinterpreterneeded: number;
    vsd_applicantsprimaryaddressline1: string;
    vsd_applicantsprimaryaddressline2: string;
    vsd_applicantsprimarycity: string;
    vsd_applicantsprimaryprovince: string;
    vsd_applicantsprimarycountry: string;
    vsd_applicantsprimarypostalcode: string;
    vsd_vsu_oktosendmail: number;
    vsd_vsu_methodofcontact1type: number;
    vsd_vsu_methodofcontact1number: string;
    vsd_vsu_methodofcontact1leavedetailedmessage: number;
    vsd_vsu_methodofcontact2type: number;
    vsd_vsu_methodofcontact2number: string;
    vsd_vsu_methodofcontact2leavedetailedmessage: number;
    vsd_vsu_methodofcontact3type: number;
    vsd_vsu_methodofcontact3number: string;
    vsd_vsu_methodofcontact3leavedetailedmessage: number;
    vsd_vsu_notificationto?: number;
    vsd_vsu_discussvtfappwithvsp?: number;

    vsd_vsu_significantcourtupdates?: number;
    vsd_vsu_finalcourtresults?: number;
    vsd_vsu_updatesonallcriminalcourtappearances?: number;
    vsd_vsu_criminalcourtordersissued?: number;
    vsd_vsu_bccorrectionsinformation?: number;
    vsd_vsu_notificationadditionalcomments?: string;

    vsd_vsu_travelexpenserequest_03?: string;
    vsd_vsu_travelexpenserequesttransportother?: string;
    vsd_vsu_travelexpenserequestother?: string;
    vsd_vsu_purposeoftravel?: string;
    vsd_vsu_travelperiodfrom?: Date;
    vsd_vsu_travelperiodto?: Date;
    vsd_vsu_additionaltravelcomments?: string;

    vsd_vsu_infosharecscpbc?: number;
    vsd_vsu_infosharevsu?: number;
    vsd_vsu_infosharevsw?: number;
    vsd_declarationverified: number;

    vsd_declarationfullname: string;
    vsd_declarationdate: Date;
    vsd_applicantssignature: string;

}
export interface iCRMCourtInfo {
    vsd_courtfilenumber: string;
    vsd_courtlocation: string;
}
export interface iCRMPoliceFileNumber {
    vsd_policefilenumber: string;
    vsd_investigatingpoliceofficername: string;
    vsd_policeforce: string;
    vsd_reportdate: Date;
}
export interface iCRMParticipant {
    vsd_firstname?: string;
    vsd_middlename?: string;
    vsd_lastname?: string;
    vsd_companyname?: string;
    vsd_name?: string;
    vsd_birthdate?: Date;
    vsd_gender?: number;
    vsd_phonenumber?: string;
    vsd_mainphoneextension?: string;
    vsd_addressline1?: string;
    vsd_addressline2?: string;
    vsd_city?: string;
    vsd_province?: string;
    vsd_postalcode?: string;

    vsd_vsu_oktosendmail?: number;

    vsd_email?: string;
    vsd_relationship1: string;
    vsd_relationship1other?: string;
    vsd_relationship2?: string;
    vsd_relationship2other?: string;

    vsd_vsu_methodofcontact1type?: number;
    vsd_vsu_methodofcontact1number?: string;
    vsd_vsu_methodofcontact1ext?: string;
    vsd_vsu_methodofcontact1leavedetailedmessage?: number;
    vsd_vsu_methodofcontact2type?: number;
    vsd_vsu_methodofcontact2number?: string;
    vsd_vsu_methodofcontact2leavedetailedmessage?: number;
    vsd_vsu_methodofcontact3type?: number;
    vsd_vsu_methodofcontact3number?: string;
    vsd_vsu_methodofcontact3leavedetailedmessage?: number;
}

export interface iCRMTravelInfo {
    vsd_courtdate?: Date;
    vsd_courtfilenumber_text?: string;
    vsd_purposeoftravel: string;
    vsd_travelperiodfrom: Date;
    vsd_travelperiodto: Date;
}

export interface iCRMDocument {
    filename: string;
    body: string;
    subject: string;
}

export interface iCRMOffence {
    vsd_offenseid: string;
}