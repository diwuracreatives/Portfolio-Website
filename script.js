$(document).ready(function () {

	$(".js-first-content").show();
	$(".js-second-content").hide();
	$(".js-third-content").hide();
	$(".js-fourth-content").hide();

	$(".js-first-tab-background").addClass("toggle-active");
	$(".js-second-tab-background").removeClass("toggle-active");
	$(".js-third-tab-background").removeClass("toggle-active");
	$(".js-fourth-tab-background").removeClass("toggle-active")

	$(".js-first-tab").click(function () {
		// Display Content
		$(".js-first-content").show();
		$(".js-second-content").hide();
		$(".js-third-content").hide();
		$(".js-fourth-content").hide();

		// Highlight Active Tab
		$(".js-first-tab-background").addClass("toggle-active");

		// Reset All Other Tabs
		$(".js-second-tab-background").removeClass("toggle-active");
		$(".js-third-tab-background").removeClass("toggle-active");
		$(".js-fourth-tab-background").removeClass("toggle-active")
	});

	$(".js-second-tab").click(function () {
		// Display Content
		$(".js-first-content").hide();
		$(".js-second-content").show();
		$(".js-third-content").hide();
		$(".js-fourth-content").hide();

		// Highlight Active Tab
		$(".js-second-tab-background").addClass("toggle-active");

		// Reset All Other Tabs
		$(".js-first-tab-background").removeClass("toggle-active");
		$(".js-third-tab-background").removeClass("toggle-active");
		$(".js-fourth-tab-background").removeClass("toggle-active")
	});

	$(".js-third-tab").click(function () {
		// Display Content
		$(".js-first-content").hide();
		$(".js-second-content").hide();
		$(".js-third-content").show();
		$(".js-fourth-content").hide();


		// Highlight Active Tab
		$(".js-third-tab-background").addClass("toggle-active");

		// Reset All Other Tabs
		$(".js-first-tab-background").removeClass("toggle-active");
		$(".js-second-tab-background").removeClass("toggle-active");
		$(".js-fourth-tab-background").removeClass("toggle-active")
	});

	$(".js-fourth-tab").click(function () {
		// Display Content
		$(".js-first-content").hide();
		$(".js-second-content").hide();
		$(".js-third-content").hide();
		$(".js-fourth-content").show();

		// Highlight Active Tab
		$(".js-fourth-tab-background").addClass("toggle-active");

		// Reset All Other Tabs
		$(".js-first-tab-background").removeClass("toggle-active");
		$(".js-second-tab-background").removeClass("toggle-active");
		$(".js-third-tab-background").removeClass("toggle-active");
	});
});



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navList");
const navLink = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}
