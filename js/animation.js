document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		})

		const yOffset = -101;// header + covid line
		const y = document.querySelector(this.getAttribute('href'))
			.getBoundingClientRect().top + window.pageYOffset + yOffset;

		window.scrollTo({ top: y, behavior: 'smooth' });
	});
});

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 400);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmltYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKS5mb3JFYWNoKGFuY2hvciA9PiB7XHJcblx0YW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG5cdFx0XHRiZWhhdmlvcjogJ3Ntb290aCdcclxuXHRcdH0pXHJcblxyXG5cdFx0Y29uc3QgeU9mZnNldCA9IC0xMDE7Ly8gaGVhZGVyICsgY292aWQgbGluZVxyXG5cdFx0Y29uc3QgeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSlcclxuXHRcdFx0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldCArIHlPZmZzZXQ7XHJcblxyXG5cdFx0d2luZG93LnNjcm9sbFRvKHsgdG9wOiB5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcblx0fSk7XHJcbn0pO1xyXG5cclxuY29uc3QgYW5pbUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLl9hbmltLWl0ZW1zJyk7XHJcblxyXG5pZiAoYW5pbUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgYW5pbU9uU2Nyb2xsKTtcclxuXHRmdW5jdGlvbiBhbmltT25TY3JvbGwoKSB7XHJcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYW5pbUl0ZW1zLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRjb25zdCBhbmltSXRlbSA9IGFuaW1JdGVtc1tpbmRleF07XHJcblx0XHRcdGNvbnN0IGFuaW1JdGVtSGVpZ2h0ID0gYW5pbUl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0XHRjb25zdCBhbmltSXRlbU9mZnNldCA9IG9mZnNldChhbmltSXRlbSkudG9wO1xyXG5cdFx0XHRjb25zdCBhbmltU3RhcnQgPSA0O1xyXG5cclxuXHRcdFx0bGV0IGFuaW1JdGVtUG9pbnQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBhbmltSXRlbUhlaWdodCAvIGFuaW1TdGFydDtcclxuXHRcdFx0aWYgKGFuaW1JdGVtSGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcblx0XHRcdFx0YW5pbUl0ZW1Qb2ludCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCAvIGFuaW1TdGFydDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKChwYWdlWU9mZnNldCA+IGFuaW1JdGVtT2Zmc2V0IC0gYW5pbUl0ZW1Qb2ludCkgJiYgcGFnZVlPZmZzZXQgPCAoYW5pbUl0ZW1PZmZzZXQgKyBhbmltSXRlbUhlaWdodCkpIHtcclxuXHRcdFx0XHRhbmltSXRlbS5jbGFzc0xpc3QuYWRkKCdfYWN0aXZlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKCFhbmltSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ19hbmltLW5vLWhpZGUnKSkge1xyXG5cdFx0XHRcdFx0YW5pbUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmdW5jdGlvbiBvZmZzZXQoZWwpIHtcclxuXHRcdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuXHRcdFx0c2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCxcclxuXHRcdFx0c2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblx0XHRyZXR1cm4geyB0b3A6IHJlY3QudG9wICsgc2Nyb2xsVG9wLCBsZWZ0OiByZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IH1cclxuXHR9XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0YW5pbU9uU2Nyb2xsKCk7XHJcblx0fSwgNDAwKTtcclxufSJdLCJmaWxlIjoiYW5pbWF0aW9uLmpzIn0=
