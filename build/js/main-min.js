(new WOW).init(),$(document).ready(function(){$(".grid").masonry({gutter:30,itemSelector:".grid__item",columnWidth:262}),$(".header__hamburger").click(function(){$(".header__mobile-nav").toggle(300),$(this).toggleClass("header__hamburger_active")}),$(".index-portfolio__category-link").click(function(i){i.preventDefault(),$(".index-portfolio__category-link").removeClass("index-portfolio__category-link_active"),$(this).addClass("index-portfolio__category-link_active");var t=$(this).data().group,e=$(".index-portfolio__img-block");e.show(),e.each(function(){$(this).data().group.includes(t)||$(this).hide()}),$(".grid").masonry("layout")}),$(".flexslider").flexslider({animation:"slide"}),$(".widget-posts__nav-item").click(function(i){if(i.preventDefault(),!$(this).attr("class").includes("widget-posts__nav-item_active")){$(".widget-posts__nav-item").removeClass("widget-posts__nav-item_active"),$(this).addClass("widget-posts__nav-item_active");var t=$(this).data().group;$(".widget-posts__group").hide(500),$(".widget-posts__group").each(function(){$(this).data().group.includes(t)&&$(this).show(500)})}}),$(".input-block .input").focus(function(){$(this).siblings(".input-block__placeholder").addClass("input-block__placeholder_active")}),$(".input-block__placeholder").click(function(){$(this).addClass("input-block__placeholder_active"),$(this).siblings(".input").focus()}),$(".input-block .input").focusout(function(){$(this).val()||$(this).siblings(".input-block__placeholder").removeClass("input-block__placeholder_active")})});
//# sourceMappingURL=main-min.js.map
