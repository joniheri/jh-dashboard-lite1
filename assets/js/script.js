const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes Jon Heri",
          data: [15, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

// DataTable
$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

// DatePicker
$("#datePicker").datepicker({
  autoclose: true,
  format: "yyyy-mm-dd",
  todayHighlight:true,
});

// Show PassrordAddUser
$(document).ready(function() {
  $('#showPassword').click(function() {
    if ($(this).is(':checked')) {
      $('#inputPassword').attr('type', 'text');
    } else {
      $('#inputPassword').attr('type', 'password');
    }
  });
  $('#showConfirmPassword').click(function() {
    if ($(this).is(':checked')) {
      $('#inputConfirmPassword').attr('type', 'text');
    } else {
      $('#inputConfirmPassword').attr('type', 'password');
    }
  });
});

// Send ID To ModalDialog
$(document).on("click", ".open-DeleteDialog", function () {
  var idUser = $(this).data("id");
  $(".modal-body #dataId").val(idUser);
});

// SelectPasien
$(document).ready(function () {
  $(".select-pasien").select2({
    placeholder:"Select a pasien",
  });
});

// SelectPasien
$(document).ready(function () {
  $(".select-dokter").select2({
    placeholder:"Select a dokter",
  });
});

// Autofill Data Pasien
$('#noKtpPasien').on('change', (event)=>{
  getDataPasien(event.target.value).then(pasien =>{
    // console.log('Data Pasien : ',pasien[0].fullname);
    $('#fullnamePasien').val(pasien[0].fullname);
    $('#genderPasien').val(pasien[0].gender);
    $('#addressPasien').val(pasien[0].address);
  });
});
async function getDataPasien(id){
  let response = await fetch('/rmgetdatapasien/'+id);
  let data = await response.json();
  // console.log(data);
  return data;
};

// Autofill Data Dokter
$('#noKtpDokter').on('change', (event)=>{
  getDataDokter(event.target.value).then(dokter =>{
    // console.log('Data Dokter : ', dokter[0].fullname);
    $('#fullnameDokter').val(dokter[0].fullname);
    $('#genderDokter').val(dokter[0].gender);
    $('#specialis').val(dokter[0].address);
  });
});
async function getDataDokter(id){
  try {
    let response = await fetch('/rmgetdatadokter/'+id);
    let data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};