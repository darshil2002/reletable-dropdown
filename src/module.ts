export interface Root {
    success: boolean
    message: string
    programs: Program[]
  }

  export interface Program {
    push(arg0: { this: any }): unknown
    programID: string
    programNumber: string
    programName: string
    programDescription: string
    canDelete: boolean
    isActive: boolean
    programBudget: number
    isVirtual: boolean
  }


  export interface dropdownArray{
    programID:string,
    programName:string,
  }





  // dsgjdsjg



  export interface projectAllData {
    success: boolean
    message: string
    activeProjectList: ActiveProjectList
  }
  
  export interface ActiveProjectList {
    table: Table[]
  }
  
  export interface Table {
    programId: string
    projectName: string
    projectID: string
    projectTypeId: number
    pmId: string
    ae: string
    cm: string
    projectNumber: string
    budget: number
    estimatedCost: number
    projectType: string
    cEs: number
    issues: number
  }



  export interface chartSendData {
    IsVirtualProgram: boolean
    programID: string
    projectID: string
  }