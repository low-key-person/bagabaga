(function ($) {
  var methods = {
    init: function (options) {
      var curDate=new Date(),
        curyear=curDate.getFullYear(),
        curmonth=curDate.getMonth()+1,
        curday=curDate.getDate();
      var de = {
        $wrap: $(this),
        $year: $('.year_name', this),
        $month: $('.month_name', this),
        $yearPrev: $('.yearPrev', this),
        $yearNext: $('.yearNext', this),
        $prev: $('.prev', this),
        $next: $('.next', this),
        $tbody: $('tbody', this),
        mydate: [curyear, curmonth, curday],
        eventFlag: true,
        getDataFlag: true,
        json: [],
        hasMyDate: false, // 是否有指定日期
        yearSuffix: '年', // 年标题后缀
        monthSuffix: '月', // 月标题后缀
        noNextLimit: false // next是否无时间限制(默认有 仅可选至当前月)
      };
      methods.options = $.extend(true, {}, de, options);
      methods.dataFormat();
    },
    dataFormat: function () {
      var curDate=new Date(),
        curyear=curDate.getFullYear(),
        curmonth=curDate.getMonth()+1;
      this.year = this.options.mydate[0];
      this.month = this.options.mydate[1];
      this.date = this.options.mydate[2];
      this.curyear = curyear;
      this.curmonth = curmonth;
      this.render();
    },
    formatDate: function (datestr) { // '2021年1月1日' -> '20210101'
        if(!$.trim(datestr)) return '';
        var arr = datestr.match(/\d+/g);
        if(!arr || arr.length <= 0) {
          return datestr;
        }
        arr = arr.map(function(item){
            return parseInt(item) < 10 ? '0'+item : item;
        });
        return arr.join('');
    },
    render: function () {
      this.options.$year.text(this.year + this.options.yearSuffix);
      this.options.$month.text(this.month + this.options.monthSuffix);
      this.tableRender();
      if(this.options.eventFlag) {
        this.bindEvent();
        this.options.eventFlag = !this.options.eventFlag;
      }
    },
    tableRender: function () {
      var firstDay = this.getFirstDay(this.year, this.month);
      firstDay = firstDay==0 ? 7 : firstDay;
      var thisMonthsDays = this.getDaysInMonth(this.year, this.month);
      var htm = "";
      var rowNum = this.getRowNum(firstDay, thisMonthsDays);
      if (rowNum > 5) {
        this.options.$tbody.addClass('rowNum-6')
      } else {
        this.options.$tbody.removeClass('rowNum-6')
      }
      if (firstDay != 1) {
        var preMonthDays = this.getDaysInMonth(this.year, this.month - 1);
        var flag = -1 ;
        var dayText = preMonthDays - firstDay + 2;
      } else {
        var flag = 0;
        var dayText = 1;
      }
      for (var i = 0; i < rowNum; i++){
        htm += "<tr>";
        for (var j = 0; j < 7; j++){
          dayText = dayText < 10 ?  "0" + dayText : dayText;
          if (flag == 0) {
            htm += "<td value='"+ this.year + (this.month < 10 ? '0' + this.month : this.month) + dayText +"' class='usual_day'><div class='riqi'>" + dayText + "<div class='piaofu'><ul></ul><span></span></div></div></td>";
          } else {
            htm += "<td class='unselected_month'>" + dayText + "</td>";
          }
          dayText++;

          if ( flag < 0 && dayText > preMonthDays) {
            flag = 0;
            dayText = 1;
          }else if (flag == 0 && dayText > thisMonthsDays) {
            flag = 1;
            dayText = 1;
          }
        }
        htm += "</tr>";
      }
      this.options.$tbody.html(htm);
      if (this.options.getDataFlag) {
        this.getData();
        this.options.getDataFlag = false;
      } else {
        this.jsonRender();
      }

    },
    getData: function () {
      if($('.'+this.year) && !!$.trim($('.'+this.year).text())){
        var jsonUrl = $.trim($('.'+this.year).text());
        var _this = this;
        var htmlobj = $.getJSON(jsonUrl, function (data, textStatus, jqXHR) {
          _this.json = data;
          _this.jsonRender();
        });
      }
    },
    jsonRender: function () {
      var json = eval(this.json) || [];
      if(json[0] && !json[0].SUB_TITLE) {
          json.shift(); // 去除无实际内容的首元素
      }
      var _this = this;
      for(var item=0;item<json.length;item++){
        var thisMon = parseInt( _this.formatDate(json[item].SUB_TITLE).substr(4, 2),10);
        if (thisMon > _this.month) {
          break;
        } else if (thisMon == _this.month) {
          let finder = _this.formatDate(json[item].SUB_TITLE);
          var target = _this.options.$tbody.find('td[value=' + finder + '] .riqi');
          target.addClass('hasdata');
          if($('.calendar-list', _this.options.$wrap).length >0) { // 稿件渲染在table外
            $(target).click(function(){
              $('.riqi', _this.options.$wrap).removeClass('current1');
              $(this).addClass('current1');
              $('.piaofu', _this.options.$wrap).hide();
              $('[data-finder='+finder+']', _this.options.$wrap).show();
            })
            if($('[data-finder='+finder+']', _this.options.$wrap).length==0){
              $('.calendar-list', _this.options.$wrap).append('<div class="piaofu" data-finder='+finder+'><ul><li><a href="' + json[item].URL + '" target="blank">' + json[item].TITLE + '</a></li></ul><span></span></div>')
            }else {
              $('[data-finder='+finder+'] ul', _this.options.$wrap).append('<li><a href="' + json[item].URL + '" target="blank">' + json[item].TITLE + '</a></li>');
            }
          }else{ // 稿件定位在当前日期格
            target.find('.piaofu ul').append('<li><a href="' + json[item].URL + '" target="blank">' + json[item].TITLE + '</a></li>');
            target.mouseover(function (e) { $(this).addClass('current bgHover'); }).mouseleave(function () { $(this).removeClass('current bgHover'); })
            if (!!_this.options.hasMyDate && _this.date == parseInt(finder.substr(6, 2),10) && _this.options.mydate[1] == thisMon && _this.options.mydate[0] == parseInt(finder.substr(0, 4))) {
              target.addClass('current1');
            }
          }
        }
      }
    },
    bindEvent: function () {
      var _this = this;
      _this.options.$yearPrev.on('click', function (e) {
        _this.year --;
        _this.options.getDataFlag = true;
        $('.piaofu', _this.options.$wrap).hide();
        _this.render();
      });
      _this.options.$yearNext.on('click', function (e) {
        if (!!_this.options.noNextLimit || _this.year < _this.curyear-1 || _this.year == _this.curyear-1 && _this.month <= _this.curmonth){
          _this.year ++;
          _this.options.getDataFlag = true;
          $('.piaofu', _this.options.$wrap).hide();
          _this.render();
        }
      });
      _this.options.$prev.on('click', function (e) {
        if (_this.month <= 1) {
          _this.year--;
          _this.options.getDataFlag = true;
          _this.month = 12;
        } else {
          _this.month --;
        }
        $('.piaofu', _this.options.$wrap).hide();
        _this.render();
      });
      _this.options.$next.on('click', function (e) {
        if (!_this.options.noNextLimit &&(_this.year > _this.curyear || _this.year == _this.curyear && _this.month >= _this.curmonth)) {
          return false;
        }else if (_this.month >= 12) {
          _this.month = 1;
          _this.year++;
          _this.options.getDataFlag = true;
        } else {
          _this.month ++;
        }
        $('.piaofu', _this.options.$wrap).hide();
        _this.render();
      });
    },
    getRowNum: function (firstDay, thisMonthsDays) {
      return Math.ceil((firstDay + thisMonthsDays - 1) / 7);
    },
    //算某个月的总天数
    getDaysInMonth: function (year, month) {
      month = parseInt(month, 10);
      var d = new Date(year, month, 0);
      return d.getDate();
    },
    //算某个月的第一天是星期几
    getFirstDay: function (year, month) {
      month = month - 1;
      var d = new Date(year, month, 1);
      return d.getDay();
    }
  };


  $.fn.myCalendar = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('函数' + method + 'jQuery.myCalendar 不存在');
    }
  };
})(jQuery);
