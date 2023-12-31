// test requst master_ matkul

var MatkulRequest = (function () {

    function fetchDataAndRender(page) {
        $.ajax({
            url: MatkulModule.buildUrl(page),
            type: "GET",
            dataType: "json",
            success: function (response) {
                MatkulModule.renderData(response.data, page);
                MatkulModule.renderPagination(response.total_pages, page);
                $(".content-wrapper").LoadingOverlay("hide", true);
            },
            error: function () {
                console.error("Failed to fetch data.");
            }
        });
    };

    function loadDataEdit(data_id) {
        $.ajax({
            url: `script/master_matkul/php/get_data_edit.php?id=${data_id}`,
            type: "GET",
            dataType: "json",
            success: function (response) {
                MatkulModule.aplyValueModalEdit(response.data);
                console.log(response.data);
            },
            error: function () {
                console.error("Failed to fetch data.");
            }
        });
    }

    function dataAdd() {
        const name_add = $("#name-add").val();

        var formData = new FormData();
        formData.append("name_add", name_add);

        $.ajax({
            url: `script/master_matkul/php/add.php`,
            type: "POST",
            data: formData,
            contentType: false, // Tambahkan ini
            processData: false, // Tambahkan ini
            success: function (responsText) {
                alert(responsText);
                $("#staticBackdrop-add").modal('hide');
            },
            error: function () {
                console.error("Failed to fetch data.");
            }
        });
    }

    function dataEdit() {
        const matkul_id = $("#matkul-id").val();
        const name_edit = $("#name-edit").val();

        var formData = new FormData();
        formData.append("matkul_id", matkul_id);
        formData.append("name_edit", name_edit);

        $.ajax({
            url: `script/master_matkul/php/update.php`,
            type: "POST",
            data: formData,
            contentType: false, // Tambahkan ini
            processData: false, // Tambahkan ini
            success: function (responsText) {
                alert(responsText);
                $("#staticBackdrop-edit").modal('hide');
            },
            error: function () {
                console.error("Failed to fetch data.");
            }
        });
    }

    function dataDelete(id) {
        $.ajax({
            url: `script/master_matkul/php/delete.php?id=${id}`,
            type: "GET",
            contentType: false, // Tambahkan ini
            processData: false, // Tambahkan ini
            success: function (response) {
                alert("succes!");
                $('#staticBackdrop-delete').modal('hide');
            },
            error: function (xhr, status, error) {
                alert("Terjadi kesalahan: " + error);
            }
        });
    }

    return {
        fetchDataAndRender: fetchDataAndRender,
        loadDataEdit: loadDataEdit,
        dataAdd: dataAdd,
        dataEdit: dataEdit,
        dataDelete: dataDelete,
    };
})();