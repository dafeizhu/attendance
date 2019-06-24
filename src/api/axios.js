import axios from "axios";
import qs from "qs";

// 登录接口函数
export function loginDataPost(values) {
  const url = "http://139.199.192.171:8080/nanitao/admin/login.action";
  const data = {
    adminnum: values.userName,
    password: values.password
  };
  return axios
    .post(url, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}

// 签到信息查询接口函数
export function signInDataPost(params, searchKey) {
  const url = "http://139.199.192.171:8080/nanitao/attenceInfo/list.action";
  if (!searchKey) {
    var data = {
      page: params.page ? params.page : 1
    };
  } else {
    data = {
      page: params.page ? params.page : 1,
      grade: searchKey.grade ? searchKey.grade : "",
      academic: searchKey.academic ? searchKey.academic : "",
      profession: searchKey.profession ? searchKey.profession : "",
      Class: searchKey.class ? searchKey.class : "",
      courseName: searchKey.courseName ? searchKey.courseName : ""
    };
  }
  console.log(data);
  return axios
    .post(url, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}

// 年级下拉列表点击方法
export function selectListGrade() {
  const url = "http://139.199.192.171:8080/nanitao/findAcademic/list.action";
  return axios.get(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then((res) => {
    console.log(res);
    return Promise.resolve(res.data)
  })
}

// 院系下拉列表点击方法
export function selectListAcademic(value) {
  const url = "http://139.199.192.171:8080/nanitao/findProfession/list.action";
  const data = {
    academicAcademic: value
  }
  return axios
    .post(url, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}

// 专业下拉列表点击方法
export function selectListProfession(value) {
  const url = "http://139.199.192.171:8080/nanitao/findClass/list.action";
  const data = {
    professionProfession: value
  };
  return axios
    .post(url, qs.stringify(data), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    })
    .then(res => {
      return Promise.resolve(res.data);
    });
}


// 课程信息查询接口函数
export function courseDataPost (params, searchKey) {
  const url = "http://139.199.192.171:8080/nanitao/courfeInfo/list.action";
  if (!searchKey) {
     var data = {
      page: params.page ? params.page : 1
    }
  } else {
    data = {
      page: params.page ? params.page : 1,
      grade: searchKey.grade ? searchKey.grade : '',
      academic: searchKey.academic ? searchKey.academic : '',
      profession: searchKey.profession ? searchKey.profession : '',
      Class: searchKey.Class ? searchKey.Class : '',
      courseName: searchKey.courseName ? searchKey.courseName : '',
    }
  }
  return axios.post(url, qs.stringify(data),{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;'
    }
  }).then((res) => {
    console.log(res.data);
    return Promise.resolve(res.data)
  })
}

export function courseDelete (id){
  const url = "http://139.199.192.171:8080/nanitao/courseInfo/deletecourseInfo.action";
  var data = {
    id: id
  }
  return axios.post(url,qs.stringify(data),{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;'
    }
  }).then((res) => {
    console.log(res);
    return Promise.resolve(res)
  })
}