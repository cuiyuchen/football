
;(function($,window){
	var exportsMethods = {
		newVerScrollForPull : function(wrapper,pulldownAction,pullupAction,opts,pullText){
			
			var $wrapper ;
			if(typeof wrapper === 'string'){
				$wrapper = $(wrapper);
			}else if(typeof wrapper === 'object'){
				$wrapper = wrapper;
			}
			
			var pulldownRefresh   = pullText && pullText['pulldownRefresh'] ? pullText['pulldownRefresh'] : '下拉刷新...',
				pullupLoadingMore = pullText && pullText['pullupLoadingMore'] ? pullText['pullupLoadingMore'] : '上拉加载更多...',
				releaseToRefresh  = pullText && pullText['releaseToRefresh'] ? pullText['releaseToRefresh'] : '松手开始刷新...',
				releaseToLoading  = pullText && pullText['releaseToLoading'] ? pullText['releaseToLoading'] : '松手开始加载...',
				loading 		  = pullText && pullText['loading'] ? pullText['loading'] : '加载中...';
			
			var $pulldown = $wrapper.find('#pulldown'),
				$pullup   = $wrapper.find('#pullup'),
				pullupOffset   = 0,
				pulldownOffset = 0;
			
			if($pulldown.length>0){
				pulldownOffset = $pulldown.outerHeight();
				$pulldown.find('#pulldown-label').html(pulldownRefresh);
			}
			var options = {
				topOffset : pulldownOffset
			};
			
			$.extend(true,options,opts);
			
			var scrollObj = this.newVerScroll($wrapper[0],options);
			
			
			
			return scrollObj;
		},
		
		newVerScroll : function(dom,option){
			var opt = {
				scrollbars : true, //是否有滚动条
				useTransition: false
			};
			if(option){
				$.extend(opt,option);
			}
			var iSObj = new iScroll(dom,opt);
			return iSObj;
		}
	};
	
	window.iscrollAssist = exportsMethods;
	
})(jQuery,window);