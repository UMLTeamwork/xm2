//<script type="text/javascript" src="./js/head.js"></script>
//onload="Rendering();"
//    <div id="top"></div>        <!-- 导航栏通过js渲染，js代码在head.js里 -->
//     <!-- 操作步骤如下： -->
//     <!-- 1. 将   <header>内容</header> 改为这一句即可 -->
//     <!-- 2. 同时加上  ./js/head.js   这个文件引入即可 -->
//     <!-- 3. 在body标签中添加 onload="Rendering();"-->
//     <!-- 4. 最后在 head.js中  把链接改为自己的链接 -->
//

function Rendering(){
    document.getElementById("top").innerHTML="<header id=\"masthead\" class=\"site-header clearfix\" role=\"banner\">\n" +
        "        <div class=\"site-branding\">\n" +
        "            <h2 class=\"site-title\">\n" +
        "                <a href=\"http://dblab.xmu.edu.cn/\" title=\"厦门大学数据库实验室\" rel=\"home\">UML课程设计</a>\n" +
        "            </h2>\n" +
        "            <div class=\"site-logo\"><img src=\"/web/images/branding.png\"></div>\n" +
        "        </div>\n" +
        "\n" +
        "        <nav id=\"site-navigation\" class=\"site-navigation clearfix\" role=\"navigation\">\n" +
        "            <div class=\"menu-main-container\">\n" +
        "                <ul id=\"menu-main\" class=\"menu menu-level-1\">\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a\n" +
        "                            href=\"..\\html\\test.html\">首页</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"/web/html/test.html\">课程负责人</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/html/test2.html\">课程简介</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\".\\demo\\course\\features.html\">课程特色</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/bigdata/\">课程动态</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/8197/\">教师团队</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/10164/\">教学资源链接</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/bigdata/\">友情链接</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a\n" +
        "                            href=\"http://dblab.xmu.edu.cn/post/bigdata-teaching-platform/\">课程概况</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\".\\demo\\course\\introduction.html\">课程简介</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\".\\demo\\course\\features.html\">课程特色</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\".\\demo\\course\\data.html\">教材与参考资料</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\".\\demo\\course\\history.html\">历史沿革</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a\n" +
        "                            href=\"#\">教师队伍</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"/web/demo/teaching_body/CourseManager.html\">课程负责人</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_body/TeachingTeam.html\">课程教学团队</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_body/Teachers.html\">主讲教师</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"/web/demo/teaching_body/Techer_education.html\">青年教师培养</a></li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a\n" +
        "                            href=\"http://dblab.xmu.edu.cn/topic/info/\">教学安排</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"http://dblab.xmu.edu.cn/post/bigdata-teaching-platform/\">教学大纲</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/8197/\">教学日历</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/10164/\">教学内容</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/bigdata/\">授课计划</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/8197/\">教学难重点</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/10164/\">教学方法与手段</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a href=\"http://dblab.xmu.edu.cn/topic/research/\">教学研究改革</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"http://dblab.xmu.edu.cn/post/bigdata-teaching-platform/\">教学改革措施</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/8197/\">教学改革立项</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/10164/\">教学改革成果</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"http://dblab.xmu.edu.cn/post/bigdata/\">教学表彰和奖励</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a href=\"/web/demo/resource/resource_ppt.html\">教学资源</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_ppt.html\">课程课件</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_vedio.html\">教学录像</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_testbase.html\">习题库</a>" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_casebase.html\">案例库</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_project_task.html\">实验任务</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/resource/resource_technique_word.html\">技术文档范本</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a href=\"http://dblab.xmu.edu.cn/topic/teaching/\">教学管理</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/2984/\">开课计划</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/1089/\">上课班级</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/368/\">班级花名册</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/303/\">班级成绩单</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/352/\">学生作业案例</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a href=\"/web/demo/teaching_effect/Experts_evaluation.html\">教学效果</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/Experts_evaluation.html\">校外专家评价</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/School_evaluation.html\">校内督导评价</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/Teacher_evaluation.html\">教师自我评价</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/Student_evaluation.html\">校内学生评价</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/Social_evaluation.html\">社会评价</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"/web/demo/teaching_effect/Teaching_evaluation.html\">教学评估及相关文件</a>\n" +
        "                            </li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <li class=\"menu-item item-level-1 has-sub-menu\"><a\n" +
        "                            href=\"http://dblab.xmu.edu.cn/topic/dblab/\">教学互动</a>\n" +
        "                        <ul class=\"sub-menu menu-level-2\">\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/8197/\">微信群</a></li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a href=\"http://dblab.xmu.edu.cn/post/10164/\">QQ群</a>\n" +
        "                            </li>\n" +
        "                            <li class=\"menu-item item-level-2\"><a\n" +
        "                                    href=\"http://dblab.xmu.edu.cn/post/bigdata/\">网站内的师生互动</a></li>\n" +
        "                        </ul>\n" +
        "                    </li>\n" +
        "                    <!--div class=\"search-area\"><span id=\"search-content\" class=\"search-content\" style=\"display: none;\"><form role=\"search\" method=\"get\" class=\"search-form\" action=\"http://dblab.xmu.edu.cn/\"><input type=\"search\" class=\"search-field\" placeholder=\"搜索内容…\" name=\"s\" title=\"搜索内容：\"><input type=\"submit\" class=\"search-submit\" value=\"搜索\"></form></span><span id=\"search-icon\" class=\"search-icon\" title=\"搜索文章内容\"></span></div></div>\t\t<div class=\"small-menu\"></div></nav-->\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "            <div class=\"small-menu\"></div>\n" +
        "        </nav>\n" +
        "    </header>";
    /**
     * navigation.js
     *
     * Handles toggling the navigation menu for small screens.
     */
    jQuery(document).ready(function($){
        var LabMenu = {
            /**
             * 显示小菜单
             */
            showSmallMenu: function() {
                $('.site-navigation').append('<div class="small-menu"></div>');
            },
            /**
             * 在主菜单中
             */
            showSearch: function() {
                var html = '<div class="search-area"><span id="search-content" class="search-content">' +
                    '<form role="search" method="get" class="search-form" action="http://dblab.xmu.edu.cn/">' +
                    '<input type="search" class="search-field" placeholder="搜索内容…" value="" name="s" title="搜索内容：">' +
                    '<input type="submit" class="search-submit" value="搜索"></form>' +
                    '</span><span id="search-icon" class="search-icon" title="搜索文章内容"></span></div>';
                $('.menu-main-container').append(html);
                $('#search-content').hide();
                $('#search-icon').on('click', LabMenu.toggleSearch);
            },
            /**
             * 加载菜单效果
             */
            showMenu: function() {
                $('#menu-main').on('click', 'li', function(event) {
                    // $('#menu-main').on('click', 'li', function(event) {
                    event.stopPropagation();
                    if ($(this).hasClass('has-sub-menu')) {
                        // console.log('has-sub-menu');
                        event.preventDefault();
                        if ($(this).hasClass('active')) {
                            $(this).trigger('mouseleave');
                        } else {
                            $(this).trigger('mouseenter');
                        }
                    }
                });
                $('#menu-main > li').hover(
                    function() {
                        // console.log('trigger in');
                        $(this).addClass('active').children('ul').stop(false, true).slideDown(200);
                    }, function() {
                        // console.log('trigger out');
                        $(this).removeClass('active').children('ul').stop(false, true).slideUp(0);
                    }
                );
            },
            /**
             * 显示搜索框
             */
            toggleSearch: function() {
                $('#search-icon').toggleClass('active');
                // $('#search-content').toggle();
                $('#search-content').stop(false, true).fadeToggle(300, function() {
                    if ($('#search-icon').hasClass('active')) {
                        $('#search-content').find('.search-field').focus();
                    }
                });
            },
            /**
             * 将当前菜单项加上背景
             * 文章可能有多个分类，只取第一个

            showCurrentMenuItem: function() {
                if ($('#menu-main').find('.current-path').length == 1) {
                    $('#menu-main').find('.current-path').addClass('active-path');
                } else {
                    var arr = [];
                    var flag = false;
                    $('.breadcrumbs').find('a').each(function() {
                        arr.push($(this).text());
                    });
                    $('#menu-main').find('.current-path').each(function() {
                        if ($.inArray($(this).children('a').text(), arr) > -1) {
                            flag = true;
                            $(this).addClass('active-path');
                        }
                    });
                    if (!flag) {
                        $('#menu-main li:first').addClass('active-path');
                    }
                }
            },*/
            /**
             * 小菜单面板是需要时才载入的
             */
            isLoad: false,
            /**
             * 加载小菜单面板
             */
            loadMenuPanel: function() {
                if (this.isLoad) return;
                this.isLoad = true;
                var html = '<div id="menu-panel" class="menu-panel"><div class="menu-panel-container">' +
                    '<div class="menu-panel-back"><a href="javascript:void(0);">返回</a></div>' +
                    '<div class="menu-panel-search">' +
                    '<form role="search" method="get" class="search-form" action="http://dblab.xmu.edu.cn/">' +
                    '<input type="search" class="search-field" placeholder="搜索内容…" value="" name="s" title="搜索内容：">' +
                    '<input type="submit" class="search-submit" value="搜索"></form></div>';
                var menu = $('.menu-main-container').html();
                html += menu.replace(/( id="([^'"]*)")/g, '');
                html += '</div></div>';
                $('body').append(html);
                $('#menu-panel').css({'width': '260px'});
                $('#wrapper').css({'position': 'relative', 'left': 0, 'top': 0, 'z-index': '2'});
                $('.small-menu').on('click', this.toggleMenuPanel);
                $('.menu-panel-back').on('click', this.toggleMenuPanel);
                $('#menu-panel').on('click', 'li', this.menuPanelLink);
            },
            /**
             * 记录小菜单面板的状态
             */
            isActive: false,
            /**
             * 显示小菜单面板
             * 只要控制wrapper就可以了
             */
            toggleMenuPanel: function() {
                // console.log(LabMenu.isActive);
                if (LabMenu.isActive) { // hide
                    $('.small-menu').removeClass('small-menu-open');
                    $('#wrapper').stop(false, true).animate({'left': '0'}, 300, function() {
                        LabMenu.isActive = false;
                        $('#menu-panel').hide();
                        $('body').css('overflow-x', 'visible');
                    });
                } else { // show
                    $('body').css('overflow-x', 'hidden');
                    $('#menu-panel').show();
                    $('.small-menu').addClass('small-menu-open');
                    $('#wrapper').stop(false, true).animate({'left': '260px'}, 300, function() {
                        LabMenu.isActive = true;
                    });
                }
            },
            /**
             *
             */
            menuPanelLink: function(event) {
                // console.log($(this).attr('class'));
                event.stopPropagation();
                if ($(this).hasClass('has-sub-menu')) {
                    event.preventDefault();
                    $(this).toggleClass('active-item').children('.sub-menu').slideToggle(200);
                }
            },
            /**
             * 监视窗口大小改变，加载小菜单
             * 其实这一步也可以不用，直接载入就行
             */
            monitor: function() {
                // console.log('resize');
                if ($(window).width() < 720) {
                    LabMenu.loadMenuPanel();
                    $(window).off('resize', LabMenu.monitor);
                }
            },
            /**
             * 初始化
             */
            init: function() {
                this.showMenu();
                this.showSmallMenu();
                this.showSearch();
                this.showCurrentMenuItem();
                if (screen.width < 720) {
                    this.loadMenuPanel();
                } else { // 屏幕尺寸大，才需要绑定resize
                    if ($(window).width() < 720) {
                        this.loadMenuPanel();
                    } else {
                        $(window).on('resize', LabMenu.monitor);
                    }
                }
            }
        };

        LabMenu.init();

    });

}




